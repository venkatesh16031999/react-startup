import React from 'react';

import classes from './Navigation.css';
import Logo from '../Logo/Logo';
import Navigationitems from './Navigationitems/Navigationitems';
import Toggler from './Toggler/Toggler';

const Navigation=(props)=>(
	<header className={classes.Navigation}>
		<Toggler showtoggler={props.enabletoggler} />
	<div className={classes.Logo}>
		<Logo />
	</div>
	<nav className={classes.nav}>
	<Navigationitems />
	</nav>
	</header>
	);

export default Navigation;