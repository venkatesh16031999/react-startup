import React from 'react';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import classes from './Layout.css';

const Layout=(props)=>(
		<Auxillary>
		<div>nav sidedrawwer backdrop</div>
		<main className={classes.content}>
			{props.children}
		</main>
		</Auxillary>
	);
export default Layout;