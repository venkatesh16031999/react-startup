import React from 'react';
import classes from './Input.css';

const Input=(props)=>{
	let inputelement=null;

	switch (props.elementType){
		case ('input'):
			inputelement=<input 
			className={classes.input} 
			{...props.elementConfig} 
			value={props.value }
			/>;
			break;
		case ('textarea'):
			inputelement=<textarea 
			className={classes.input} 
			{...props.elementConfig}
			value={props.value }
			/>;
			break;
		case ('select'):
			inputelement=(<select
			className={classes.input} 
			value={props.value }
			>
		
				{props.elementConfig.options.map(options=>{
					return(
						<option value={options.value} >
						{options.displayValue}
						</option>
						)
				})}
		
				}
			</select>)
			break;

		default:
			inputelement=<input 
			className={classes.input} 
			{...props.elementConfig}
			value={props.value }
			/>;
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