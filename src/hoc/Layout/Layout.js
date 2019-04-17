import React,{Component} from 'react';
import Auxillary from '../Auxillary/Auxillary';
import classes from './Layout.css';
import Navigation from '../../components/Navigation/Navigation';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component{
	state={
		showsidedrawer:false
	}

	enabletogglerHandler=()=>{
		this.setState({
				showsidedrawer: ! this.state.showsidedrawer
		});
	}

	SidedrawercloseHandler=()=>{
		this.setState({
				showsidedrawer:false
			});
	}
	render(){
		return 	<Auxillary>

			<Sidedrawer 
			open={this.state.showsidedrawer}
			closesidedrawer={this.SidedrawercloseHandler}
			/>
			<Navigation enabletoggler={this.enabletogglerHandler} />
			<main className={classes.content}>
				{this.props.children}
			</main>
		</Auxillary>

	}
}
	
export default Layout;