import React,{Component} from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';

import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols' ;

const INGREDIENTPRICE={
		cheese:20,
		salad:15,
		bacon:10,
		meat:30
}

class Burgerbuilder extends Component{
	state={
		ingredients:{
		cheese:0,
		salad:0,
		bacon:0,
		meat:0,
		},
		totalprice:0,
		purchase:false
	}

	purchasevalidation(countofinc){
		const purchasecheck=Object.keys(countofinc)
		.map((itemkeys)=>{
			return countofinc[itemkeys]
		}).reduce((acc,ele)=>{
			return acc + ele;
		},0);
		this.setState({
			purchase:purchasecheck > 0
		});

	}

	addingincredientHandler=(type)=>{
		const oldcount=this.state.ingredients[type];
		const updatedcount=oldcount + 1;
		const countofinc={
			...this.state.ingredients
		};
		countofinc[type]=updatedcount;
		const priceaddition=INGREDIENTPRICE[type];
		const Totalprice=this.state.totalprice;
		const newprice=Totalprice + priceaddition;

		this.setState({
			ingredients:countofinc,
			totalprice:newprice,
		});
		this.purchasevalidation(countofinc);
	}

	removingincredientHandler=(type)=>{
		const oldcount=this.state.ingredients[type];
		const updatedcount=oldcount - 1;
		if(oldcount<=0){
			return;
		}
		const countofinc={
			...this.state.ingredients
		};
		countofinc[type]=updatedcount;
		const pricededuction=INGREDIENTPRICE[type];
		const Totalprice=this.state.totalprice;
		const newprice=Totalprice - pricededuction;

		this.setState({
			ingredients:countofinc,
			totalprice:newprice,
		});
		this.purchasevalidation(countofinc);
	}

	render(){
		let disableinfo={...this.state.ingredients};
		for (let items in disableinfo){
			disableinfo[items]=disableinfo[items]<=0;
		}

		return (
			<Auxillary>

					<Burger items={this.state.ingredients}/>
					
					<Buildcontrols 
					moreingredients={this.addingincredientHandler}
					lessingredients={this.removingincredientHandler} 
					disablelessbutton={disableinfo}
					purchasetest={this.state.purchase}
					totalamount={this.state.totalprice} />

			</Auxillary>
			);
	}
}

export default Burgerbuilder;