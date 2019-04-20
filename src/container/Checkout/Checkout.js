import React,{ Component } from 'react';
import { Route } from 'react-router-dom' ;


import Checkoutsummary from '../../components/Checkoutsummary/Checkoutsummary';
import Checkoutcontent from '../Checkoutcontent/Checkoutcontent';

class Checkout extends Component{
	state={
		ingredients:null,
		totalprice:0
	}

	componentWillMount(){
		const query=new URLSearchParams(this.props.location.search);
		const ingredients={};
		let price=0;
		for(let items of query.entries()){
			if(items[0]==='price'){
				price=items[1]
			}
				else{
					ingredients[items[0]]= +items[1];
				}
			
		}
		this.setState({
			ingredients:ingredients,
			totalprice:price

		});

	}

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
				 items={this.state.ingredients}  />

				<Route path={this.props.match.path + '/content-data'} 
				render={(props)=>(<Checkoutcontent 
					ingredients={this.state.ingredients} 
					price={this.state.totalprice} 
					{...props}/>)} />
				</div>
			)
	}
} 

export default Checkout;