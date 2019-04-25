import React,{ Component } from 'react';
import { Route } from 'react-router-dom' ;
import { connect } from 'react-redux';


import Checkoutsummary from '../../components/Checkoutsummary/Checkoutsummary';
import Checkoutcontent from '../Checkoutcontent/Checkoutcontent';

class Checkout extends Component{

	continuecheckoutHandler=()=>{
			this.props.history.push('/checkout/content-data');
	}

	cancelcheckoutHandler=()=>{
			
			this.props.history.goBack();
	}



	render(){
		return (
			<div>
				<Checkoutsummary
				continuecheckout={this.continuecheckoutHandler}
				cancelcheckout={this.cancelcheckoutHandler}
				 items={this.props.ing}  />

				<Route path={this.props.match.path + '/content-data'} 
				component={Checkoutcontent} />
				</div>
			)
	}
} 
const mapStateToProps=state=>{
	return{
		ing:state.ingredients,
	}
}

export default connect(mapStateToProps)(Checkout);