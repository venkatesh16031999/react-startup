import React from 'react';
import classes from './Input.css';

const Input=(props)=>{
	let inputelement=null;

	switch (props.inputtype){
		case ('input'):
			inputelement=<input className={classes.input} />;
			break;
			case ('textarea'):
			inputelement=<textarea className={classes.input} />;
			break;
			default:
			inputelement=<input className={classes.input} />;
			break;
	}
	
	return(
			<div className={classes.inputdiv}>
				<label className={classes.label}>{props.name}</label>
				{inputelement}
			</div>
		);
}

export default Input;