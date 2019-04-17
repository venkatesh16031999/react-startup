import React,{Component} from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Buttons/Button';

class Ordersummary extends Component{
	componentWillUpdate(){
		console.log("Ordersummary updated");
	}

	render(){
		const Ingredients=Object.keys(this.props.ingredient)
		.map((itemkeys)=>{
			return (<li>
					{itemkeys}:{this.props.ingredient[itemkeys]}
				</li>)
		});

	return <Auxillary>
				<h1>Order Summary</h1>
				<p>The tasty Burger with Incrediants:</p>
				<ul>
					{Ingredients}
				</ul>
				<p>Total Cost:{this.props.amount.toFixed(2)}</p>
				<h3>Conform Your Order?</h3>
				<Button btntype='Danger' click={this.props.modelclose}>CANCEL</Button>
				<Button btntype='Success' click={this.props.continue}>CONTINUE</Button>

			</Auxillary>
		}
}

export default Ordersummary;