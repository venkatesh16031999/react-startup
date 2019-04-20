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
				value: ''
			},
			email:{
				elementType: 'input',
				elementConfig:{
					type: 'email',
					placeholder: 'Your mail'
				},
				value: ''
			},
			street:{
				elementType: 'input',
				elementConfig:{
					type: 'text',
					placeholder: 'Your StreetName'
				},
				value: ''
			},
			pincode:{
				elementType: 'input',
				elementConfig:{
					type: 'text',
					placeholder: 'Pincode'
				},
				value: ''
			},
			deliverymode:{
				elementType: 'select',
				elementConfig:{
					options:[
					{value:'fastest',displayValue:'fastest'},
					{value:'cheapest',displayValue:'cheapest'}
					]
				},
				value: ''
			},


		},
		
		showspinner:false
	}

	orderHandler=(event)=>{
		event.preventDefault();
		this.setState({showspinner:true})
		const data={
				ingredient:this.props.ingredients,
				totalprice:this.props.price,
				
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
	
	

	render(){
			const formarray=[];
			for(let key in this.state.orderform){
				formarray.push({
					config:this.state.orderform[key],
					id:key,
				})
			}

			 formarray.map(element=>{
			 	return(
			 		<Input
			 		key={element.id}
			 		 elementType={element.config.elementType}
			 		 elementConfig={element.config.elementConfig}
			 		 value={element.config.value} />)
			 		}
			 		);
			


			let form=(
		<form>
			
				{ formarray.map(element=>{
			 	return(
			 		<Input
			 		key={element.id}
			 		 elementType={element.config.elementType}
			 		 elementConfig={element.config.elementConfig}
			 		 value={element.config.value} />)
			 		}
			 		)}

			
			
			<Button  btntype="Success" click={this.orderHandler}>Order</Button>
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