import React from 'react';


import Burgeringredient from './Burgeringredients/Burgeringrdient';
import classes from './Burger.css';

const Burger=(props)=>{
	let noofingredient=Object.keys(props.items)
	.map( itemkeys=>{
			return [...Array(props.items[itemkeys])].map((_,i)=>{
				return <Burgeringredient  key={itemkeys + i} type={itemkeys}/>
				})
		}
	)
	//.reduce((acc,el)=>{
		//return acc.concat(el);
	//},[]);
	//if(props.items===0){
		//noofingredient=<p>dgd</p>
	//}

	
	return (
			<div className={classes.Burger}>
				<Burgeringredient type="Bread-Top" />
					{noofingredient}
				<Burgeringredient type="Bread-Bottom" />
			</div>
		);
};

export default Burger;