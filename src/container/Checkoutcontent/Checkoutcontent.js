import React ,{Component} from 'react';
import classes from './Checkoutcontent.css';
import Button from '../../components/UI/Buttons/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import { withRouter} from 'react-router-dom';
import axios from 'axios';

class Checkoutcontent extends Component{
	state={
		orderform:{
			name:{
				elementType: 'input',
				elementConfig:{
					type: 'text',
					placeholder: 'Your Name'
				},
				value: '',
				validation:{
					required:true,
					minLength:5
				},
				valid:false,
				touch:false
			},
			email:{
				elementType: 'input',
				elementConfig:{
					type: 'email',
					placeholder: 'Your mail'
				},
				value: '',
				validation:{
					required:true,
					minLength:5
				},
				valid:false,
				touch:false
			},
			street:{
				elementType: 'input',
				elementConfig:{
					type: 'text',
					placeholder: 'Your StreetName'
				},
				value: '',
				validation:{
					required:true,
					minLength:5
				},
				valid:false,
				touch:false
			},
			pincode:{
				elementType: 'input',
				elementConfig:{
					type: 'text',
					placeholder: 'Pincode'
				},
				value: '',
				validation:{
					required:true,
					minLength:5
				},
				valid:false,
				touch:false
			},
			deliverymode:{
				elementType: 'select',
				elementConfig:{
					options:[
					{value:'fastest',displayValue:'fastest'},
					{value:'cheapest',displayValue:'cheapest'}
					]
				},
				value: '',
				valid:true
			},


		},
		
		showspinner:false,
		formisvalid:false
	}

	checkvalidity(value,rules){
		let isValid=true;
		


		if(rules.required){
			isValid=value.trim()!==''&& isValid;
		}
		if(rules.minLength){
			isValid=value.length>=rules.minLength&& isValid; 
		}


		return isValid
	}

	orderHandler=(event)=>{
		event.preventDefault();
		this.setState({showspinner:true});
		const forminfo={};
		for(let formelement in this.state.orderform){
			forminfo[formelement]=this.state.orderform[formelement].value;
		
		}

		const data={
				ingredient:this.props.ingredients,
				totalprice:this.props.price,
				formdata:forminfo,
				
			}

			axios.post('https://reactburger-3c563.firebaseio.com/orders.json',data)
			.then(response=>{
				this.setState({showspinner:true});
				this.props.history.replace('/');
			})
			.catch(error=>this.setState({
				showspinner:false
			}));
	}
	
	forminputchangeHandler=(event,index)=>{
		const updatedform={...this.state.orderform};
		const updatedformelement={...updatedform[index]}
		updatedformelement.value=event.target.value;
		updatedformelement.touch=true;
		updatedformelement.valid=this.checkvalidity(updatedformelement.value,updatedformelement.validation);
		updatedform[index]=updatedformelement;

		let formisvalid=true;
		for(let index in updatedform){
			formisvalid=updatedform[index].valid&&formisvalid
		}
		console.log(formisvalid);
		
		this.setState({
			orderform:updatedform,
			formisvalid:formisvalid
		});

	}
	

	render(){
			const formarray=[];
			for(let key in this.state.orderform){
				formarray.push({
					config:this.state.orderform[key],
					id:key,
				})
			}

			let form=(
		<form onSubmit={this.orderHandler}>
			
				{ formarray.map(element=>{
			 	return(
			 		<Input
			 		key={element.id}
			 		 elementType={element.config.elementType}
			 		 elementConfig={element.config.elementConfig}
			 		 value={element.config.value} 
			 		 invalid={!element.config.valid}
			 		 validation={element.config.validation}
			 		 touch={element.config.touch}
			 		 changed={(event)=>{this.forminputchangeHandler(event,element.id)}}/>)
			 		}
			 		)}

			
			
			<Button disabled={!this.state.formisvalid} btntype="Success">Order</Button>
		</form>
					);
	if(this.state.showspinner){
		form=<Spinner />
	}	
	
		return (
				<div className={classes.Checkoutcontent}>
					<h3>Checkout order..</h3>
					{form}

					
				</div>
			);
	}
}

export default withRouter(Checkoutcontent);