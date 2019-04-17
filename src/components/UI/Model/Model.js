import React,{Component} from 'react';
import classes from './Model.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary/Auxillary';

class Model extends Component{
	shouldComponentUpdate(nextprops,nextstate){
		return nextprops.show !== this.props.show || nextprops.children!==this.props.children;
	}
	componentWillUpdate(){
		console.log("ordersummary updated");
	}
	render(){
		return (
	<Auxillary>
	<Backdrop show={this.props.show} close={this.props.modelclose} />
	<div 
	className={classes.Modal}
	style={{
		transform: this.props.show ? 'translateY(-16vh)' : 'translateY(-150vh)',
		opacity: this.props.show ? '1' : '0'
	}}
	>
		{this.props.children}
	</div>
	</Auxillary>
					);
	}
}


export default Model;