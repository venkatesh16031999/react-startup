import * as actionTypes from './actionTypes';

const initialState={
	ingredients:{
		salad:0,
		bacon:0,
		cheese:0,
		meat:0
	},
	totalprice:0
}

const INGREDIENTPRICE={
		cheese:20,
		salad:15,
		bacon:10,
		meat:30
}

const Reducer=(state=initialState,action)=>{
	switch(action.type){
		case actionTypes.ADD_INGREDIENTS:
		return{
				...state,
				ingredients:{
					...state.ingredients,
					[action.ingName]:state.ingredients[action.ingName]+1
				},
				totalprice:state.totalprice + INGREDIENTPRICE[action.ingName]
		}
		case actionTypes.REMOVE_INGREDIENTS:
		return{
				...state,
				ingredients:{
					...state.ingredients,
					[action.ingName]:state.ingredients[action.ingName]-1
				},
				totalprice:state.totalprice - INGREDIENTPRICE[action.ingName]
	}
	return state;
		default:
		return{
			...state
		}
	}
}
export default Reducer; 