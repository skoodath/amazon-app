export const initialState = 
  {
  basket: [],
  showcategory: false
  }

const reducer = (state, action) =>{
  switch(action.type){
    case 'Add_to_Basket':
      return {
        ...state,
        basket: [...state.basket, action.type]
        };
    case 'showcat':
      return{
        ...state,
        showcategory: [...state.showcategory, action.type]
      };
    default:
        return state;
  }
}

export default reducer;