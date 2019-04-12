import React from 'react';


import Controlbutton from './Buttons/Controlbutton';

import classes from './Buildcontrols.css';

	const controllabel=[
	{label:'Salad',type:'salad'},
	{label:'Bacon',type:'bacon'},
	{label:'Cheese',type:'cheese'},
	{label:'Meat',type:'meat'},
	];
	


const Buildcontrols=(props)=>(
	  <div className={classes.Buildcontrols}>
	  			<p>The Burger price:{props.totalamount.toFixed(2)}</p>
				{controllabel.map(ctrl=>{
					return (<Controlbutton 
						key={ctrl.label} 
						label={ctrl.label}
						adding={()=>{props.moreingredients(ctrl.type)}}
						removing={()=>{props.lessingredients(ctrl.type)}}
						disable={props.disablelessbutton[ctrl.type]} />)
				})}
					<button 
					className={classes.OrderButton} 
					disabled={!props.purchasetest}
					onClick={props.modelview}>Order Now</button>
			</div>
		)


export default Buildcontrols;