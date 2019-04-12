import React from 'react';
import classes from './Navcomponents.css';

const Navcomponents=(props)=>(
		<li className={classes.Navcomponents}>
			<a 
			className={props.active ? classes.active : null} 
			href={props.link}>
				{props.children}
			</a>
		</li>
	);

export default Navcomponents;