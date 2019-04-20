import React from 'react';
import classes from './Ordercomponent.css';

const Ordercomponent=(props)=>{
	
	const Ingredients=[];

	for(let itemname in props.Ingredients){
		Ingredients.push({
			name:itemname,
			amount:props.Ingredients[itemname]
		});
	}
	const ingredientsoutput=Ingredients.map(items=>{
		return <span
		style={{
			textTransfrom:'capitalize',
			dsiplay:'block',
			border:'1px solid grey',
			padding:'2px',
			margin:'auto 5px',
			borderRadius:'5px',
		}}
		>{items.name}({items.amount})</span>

		});



	return(
		<div className={classes.Ordercomponent}>
		<p>Ingredients:{ingredientsoutput}</p>
		<p>price: <strong>Rs.{props.price}</strong></p>
		</div>
		);
}

export default Ordercomponent;