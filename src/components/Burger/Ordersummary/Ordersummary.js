import React from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Buttons/Button';

const Ordersummary=(props)=>{
		const Ingredients=Object.keys(props.ingredient)
		.map((itemkeys)=>{
			return (<li>
					{itemkeys}:{props.ingredient[itemkeys]}
				</li>)
		});

	return <Auxillary>
				<h1>Order Summary</h1>
				<p>The tasty Burger with Incrediants:</p>
				<ul>
					{Ingredients}
				</ul>
				<p>Total Cost:{props.amount.toFixed(2)}</p>
				<h3>Conform Your Order?</h3>
				<Button btntype='Danger' click={props.modelclose}>CANCEL</Button>
				<Button btntype='Success' click={props.continue}>CONTINUE</Button>

			</Auxillary>
		

}

export default Ordersummary;