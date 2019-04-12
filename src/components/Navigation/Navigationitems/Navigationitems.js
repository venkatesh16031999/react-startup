import React from 'react';
import classes from './Navigationitems.css';
import Navcomponents from './Navcomponents/Navcomponents';

const Navigationitems=(props)=>(
		<ul className={classes.Navigationitems}>
			<Navcomponents link="#" active>Burger Builder</Navcomponents>
			<Navcomponents link="#" >Checkout</Navcomponents>
		</ul>
	);

export default Navigationitems;