import React,{Component} from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';

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
		ingredients:null,
		totalprice:0,
		purchase:false,
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
			//alert("Continue process");
			
			const queryParams=[];
		
			for(let items in this.state.ingredients){
				queryParams.push(encodeURIComponent(items) + '=' + encodeURIComponent(this.state.ingredients[items]));
			}
			queryParams.push('price=' + this.state.totalprice);
			const queryString=queryParams.join('&');


			this.props.history.push({
				pathname :'/Checkout',
				search : '?' + queryString,
			});

	
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

		let ordersummary=null;
			

			let burger=this.state.error ? <p>404 error</p> : <Spinner />

			if(this.state.ingredients){
				burger= (<Auxillary>
					<Burger items={this.state.ingredients}/>
					
					<Buildcontrols 
					moreingredients={this.addingincredientHandler}
					lessingredients={this.removingincredientHandler} 
					disablelessbutton={disableinfo}
					purchasetest={this.state.purchase}
					modelview={this.modelviewHandler}
					totalamount={this.state.totalprice} />
				</Auxillary>)
				ordersummary=<Ordersummary 
						ingredient={this.state.ingredients}
						modelclose={this.modelcloseHandler}
						continue={this.continuebuttonHandler}
						amount={this.state.totalprice} />;

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

export default witherrorHandler(Burgerbuilder,axios);