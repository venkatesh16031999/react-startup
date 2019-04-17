import React from 'react';
import Burger from '../Burger/Burger'; 
import Button from '../UI/Buttons/Button';
import classes from './Checkoutsummary.css'

const Checkoutsummary=(props)=>{
	return (
		<div className={classes.Checkoutsummary}>
			<h1>Confirm your order</h1>
			<div style={{width:'100%',height:'300px',margin:'auto'}}>
				<Burger items={props.items}/>
			</div>
			<Button click btntype="Success">Continue</Button>
			<Button click btntype="Danger">Cancel</Button>
		</div>
		);
}

export default Checkoutsummary;