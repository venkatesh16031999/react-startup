import React,{Component} from 'react';
import Auxillary from '../Auxillary/Auxillary';
import Model from '../../components/UI/Model/Model';

const witherrorHandler=(Wrappedcomponent,axios)=>{
	return class extends Component{
			state={
			error:null
				}

	componentWillMount(){
		this.reqinterceptors=axios.interceptors.request.use(request=>{
			this.setState({error:null});
			return request;
		});
		this.resinterceptors=axios.interceptors.response.use(response=>response,error=>{
			this.setState({error:error});
		});
	}

	componentWillUnmount(){
		axios.interceptors.request.eject(this.reqinterceptors);
		axios.interceptors.response.eject(this.resinterceptors);
	}

	modelcloseHanlder=()=>{
		this.setState({
			error:null
		});
	}


		render(){
			return <Auxillary>
			<Model 
			show={this.state.error}
			modelclose={this.modelcloseHanlder}>
			
				{this.state.error ? this.state.error.message : null}
			</Model>
			<Wrappedcomponent {...this.props} />
		</Auxillary>
		
		}
	}
}
	

export default witherrorHandler;