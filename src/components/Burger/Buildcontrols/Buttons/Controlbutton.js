import React from 'react';
import classes from './Controlbutton.css';

const Controlbuttons=(props)=>{
	return( 
			<div className={classes.BuildControl}>
				<div className={classes.Label}>
					{props.label}
				</div>
				<button className={classes.Less} onClick={props.removing} disabled={props.disable}>Less</button>
				<button className={classes.More} onClick={props.adding}>More</button>
			</div>
		)
}

export default Controlbuttons;