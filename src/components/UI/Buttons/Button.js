import React from 'react';

import classes from './Button.css';
const Button=(props)=>(
	<button 
	className={[classes.Button,classes[props.btntype]].join(' ')}
	onClick={props.click }
	disabled={props.disabled}>
		{props.children}
	</button>
);
export default Button;