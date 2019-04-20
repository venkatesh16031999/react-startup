import React,{Component} from 'react';
import witherrorHandler from '../../hoc/witherrorHandler/witherrorHandler';
import Ordercomponent from '../../components/Ordercomponent/Ordercomponent';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axiosinstances';

class Order extends Component{
	state={
		orders:[],
		spinner:true,

	}

		componentDidMount(){

		axios.get('/orders.json')
		.then(res=>{
			let fetchedorders=[];
			for(let items in res.data){
				fetchedorders.push({
					...res.data[items],
					id:items
				});
			
			}
			this.setState({
				orders:fetchedorders,
				spinner:false
			});
		}).catch(error=>{
			this.setState({
				spinner:false
		})
	});
}


	render(){
		let ordercomp=this.state.orders.map(order=>(
					<Ordercomponent 
					key={order.id}
					Ingredients={order.ingredient}
					price={+order.totalprice} />
				)
			)
		if(this.state.spinner){
			ordercomp=<Spinner />
		}

		return(
			<div>
			
				{ordercomp}
			
			</div>
			);
	}
}

export default witherrorHandler(Order,axios);