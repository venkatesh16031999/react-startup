import React from 'react';
import classes from './DrawerToggle.css';



const Toggler=(props)=>(
		<div className={classes.DrawerToggle} onClick={props.showtoggler} >
			<div></div>
			<div></div>
			<div></div>
		</div>
	);

export default Toggler;