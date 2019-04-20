import React ,{Component} from 'react';
import classes from './Checkoutcontent.css';
import Button from '../../components/UI/Buttons/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import { withRouter} from 'react-router-dom';
import axios from 'axios';

class Checkoutcontent extends Component{
	state={
		name:'',
		email:'',
		address:{
			street:'',
			postalcode:''
		},
		showspinner:false
	}

	orderHandler=(event)=>{
		event.preventDefault();
		this.setState({showspinner:true})
		const data={
				ingredient:this.props.ingredients,
				totalprice:this.props.price,
				customer:{
					name:'venkatesh',
					address:{
						street:'strret1',
						zipcode:'641016',
					},
					email:'xyz@gmail.com'
				},
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
			let form=(
		<form>
			<Input  type="text" name="Name" placeholder="Name" />
			<Input  type="email" name="Email" placeholder="Email" />
			<Input  type="text" name="Street" placeholder="Street" />
			<Input  type="text" name="Pincode" placeholder="Pincode" />
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