import React from 'react';

import Logoburger from '../Assets/burger-logo.png';
import classes from './Logo.css';

const Logo=(props)=>(
		<div className={classes.Logo}>
			<img src={Logoburger} alt="burger-logo" />
		</div>
	);

export default Logo;