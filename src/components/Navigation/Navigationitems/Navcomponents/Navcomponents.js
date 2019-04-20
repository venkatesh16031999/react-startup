import React from 'react';
import classes from './Navcomponents.css';
import { NavLink } from 'react-router-dom';

const Navcomponents=(props)=>(
		<li className={classes.Navcomponents}>
			<NavLink
			activeClassName={classes.active}
			to={props.link}
			exact={props.exact}>
				
				{props.children}
			</NavLink>
		</li>
	);

export default Navcomponents;