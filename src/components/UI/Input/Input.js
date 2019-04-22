import React from 'react';
import classes from './Input.css';

const Input=(props)=>{
	let inputelement=null;
	const inputclass=[classes.input];
	if(props.invalid&&props.validation&&props.touch){
		inputclass.push(classes.wronginput);
	}

	switch (props.elementType){
		case ('input'):
			inputelement=<input 
			className={inputclass.join(' ')} 
			{...props.elementConfig} 
			value={props.value }
			onChange={props.changed}/>;
			break;
		case ('textarea'):
			inputelement=<textarea 
			className={inputclass.join(' ')} 
			{...props.elementConfig}
			value={props.value }
			onChange={props.changed}/>;
			break;
		case ('select'):
			inputelement=(<select
			className={inputclass.join(' ')} 
			value={props.value }
			onChange={props.changed}>
		
				{props.elementConfig.options.map((options,i)=>{
					return(
						<option value={options.value} key={options+i}>
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
			value={props.value}
			onChange={props.changed}/>;
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