import React,{ Component } from 'react';
import Checkoutsummary from '../../components/Checkoutsummary/Checkoutsummary';

class Checkout extends Component{
	state={
		ingredients:{
			salad:1,
			meat:1,
			bacon:1,
			cheese:1
		}
	}
	render(){
		return (
				<Checkoutsummary items={this.state.ingredients}  />
			)
	}
} 

export default Checkout;