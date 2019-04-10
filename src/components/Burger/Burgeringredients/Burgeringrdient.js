import React,{Component} from 'react';
import PropTypes from 'prop-types';



import classes from './Burgeringrdient.css';


class Burgeringredient extends Component{
render(){
			let Ingredient=null;

	switch(this.props.type){
		case ('Bread-Bottom'):
			Ingredient=<div className={classes.BreadBottom}></div>;
			break;
		case ('Bread-Top'):
			Ingredient=(<div className={classes.BreadTop}>
								<div className={classes.Seeds1}></div>
								<div className={classes.Seeds2}></div>
						</div>
			);
			break;
			case ('meat'):
			Ingredient=<div className={classes.Meat}></div>;
			break;
			case ('cheese'):
			Ingredient=<div className={classes.Cheese}></div>;
			break;
			case ('salad'):
			Ingredient=<div className={classes.Salad}></div>;
			break;
			case ('bacon'):
			Ingredient=<div className={classes.Bacon}></div>;
			break;
			default:
				Ingredient=null;
	}
	return Ingredient;
	
	}

	
	}
	Burgeringredient.propTypes={
		type:PropTypes.string.isRequired
};


export default Burgeringredient;