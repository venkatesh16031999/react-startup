import React from 'react';
import classes from './Navigationitems.css';
import Navcomponents from './Navcomponents/Navcomponents';

const Navigationitems=(props)=>(
		<ul className={classes.Navigationitems}>
			<Navcomponents link="/" exact>Burger Builder</Navcomponents>
			<Navcomponents link="/Order">Order</Navcomponents>
		</ul>
	);

export default Navigationitems;