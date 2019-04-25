import React,{Component} from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actionTypes';

import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols' ;
import Model from '../../components/UI/Model/Model';
import Ordersummary from '../../components/Burger/Ordersummary/Ordersummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import witherrorHandler from '../../hoc/witherrorHandler/witherrorHandler';
import axios from '../../axiosinstances';

const INGREDIENTPRICE={
		cheese:20,
		salad:15,
		bacon:10,
		meat:30
}

class Burgerbuilder extends Component{
	state={
		Modelshow:false,
		showspinner:false,
		error:null
	}

	componentDidMount(){
		axios.get('https://reactburger-3c563.firebaseio.com/ingredients.json').then(response=>{
			
				this.setState({ingredients:response.data});
		}).catch(error=>{this.setState({error:true})});
	}

	continuebuttonHandler=()=>{
			this.props.history.push('/Checkout');

	
	}

	modelcloseHandler=()=>{
		this.setState({
			Modelshow:false
		})
	}

	modelviewHandler=()=>{
		this.setState({
			Modelshow:true,
			showspinner:false
		})
	}

	purchasevalidation(ingredients){
		const purchasecheck=Object.keys(ingredients)
		.map((itemkeys)=>{
			return ingredients[itemkeys]
		}).reduce((acc,ele)=>{
			return acc + ele;
		},0);
	
		return purchasecheck > 0
		

	}


	render(){
		let disableinfo={...this.props.ing};
		for (let items in disableinfo){
			disableinfo[items]=disableinfo[items]<=0;
		}

		let ordersummary=null;
			

			let burger=this.state.error ? <p>404 error</p> : <Spinner />

			if(this.props.ing){
				burger= (<Auxillary>
					<Burger items={this.props.ing}/>
					
					<Buildcontrols 
					moreingredients={this.props.addingincredient}
					lessingredients={this.props.removingincredient} 
					disablelessbutton={disableinfo}
					purchasetest={this.purchasevalidation(this.props.ing)}
					modelview={this.modelviewHandler}
					totalamount={this.props.price} />
				</Auxillary>)
				ordersummary=<Ordersummary 
						ingredient={this.props.ing}
						modelclose={this.modelcloseHandler}
						continue={this.continuebuttonHandler}
						amount={this.props.price} />;

			}
			if(this.state.showspinner){
				ordersummary=<Spinner />
			}
			

		return (
			<Auxillary>
					<Model show={this.state.Modelshow} modelclose={this.modelcloseHandler}>
						{ordersummary}
					</Model>

					{burger}

			</Auxillary>
			);
	}
}

const mapStateToProps=state=>{
	return{
		ing:state.ingredients,
		price:state.totalprice
	}
}

const mapDispatchToProps=dispatch=>{
	return{
		addingincredient: (ingName)=>dispatch({type:actionTypes.ADD_INGREDIENTS,ingName:ingName}),
		removingincredient: (ingName)=>dispatch({type:actionTypes.REMOVE_INGREDIENTS,ingName:ingName})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(witherrorHandler(Burgerbuilder,axios));