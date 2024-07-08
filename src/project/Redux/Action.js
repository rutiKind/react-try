export const setProduct = (Recipe) => {
    return { type: 'UPDATE_RECIPE', payload: Recipe }
}
export const  AddRecipe= (Recipes) =>{
    return {type: 'ADD_RECIPE',payload:Recipes}
}
export const AddP= (Customers)=>{
    return {type: 'ADD_CUSTOMER',payload: Customers}
}
export const setPerson= (Customers)=>{
    return {type: 'UPDATE_CUSTOMER',payload: Customers}
}
export const addCategory= (Categories)=>{
    return {type: 'ADD_CATEGORY'}
}
export const setCategory=(Category)=>{
    return {type: 'UPDATE_CATEGORY'}
}