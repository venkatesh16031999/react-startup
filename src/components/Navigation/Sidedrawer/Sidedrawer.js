import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems'; 
import classes from './Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary/Auxillary';

const Sidedrawer=(props)=>{
	let addedclasses=[classes.Sidedrawer]
	if(props.open){
		addedclasses.push( classes.Open );
	}
	else{
		addedclasses.push( classes.Close );
	}

	return (
		<Auxillary>
		<Backdrop show={props.open} close={props.closesidedrawer} />
		<div className={addedclasses.join(' ')}>
			<div className={classes.Logo}>
				<Logo />
			</div>	
			<nav className={classes.nav}>
				<Navigationitems />
			</nav>
		</div>
		</Auxillary>
	);
};

export default Sidedrawer;