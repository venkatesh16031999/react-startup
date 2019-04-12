import React from 'react';
import classes from './Model.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary/Auxillary';

const Model=(props)=>(
	<Auxillary>
	<Backdrop show={props.show} close={props.modelclose} />
	<div 
	className={classes.Modal}
	style={{
		transform: props.show ? 'translateY(-16vh)' : 'translateY(-150vh)',
		opacity: props.show ? '1' : '0'
	}}
	>
		{props.children}
	</div>
	</Auxillary>
					);


export default Model;