import { useDispatch } from 'react-redux'
import { AddRecipe, addProduct } from './Redux/Action'
// import { addUser } from './redux/Action'
// import {addProduct1} from './AddProd'

debugger
export const AddR = () => {
    debugger
    const dispatch = useDispatch()
    
    // const list = useSelector(x => x.products)

    const send = (event) => {
        debugger
        event.preventDefault()
        
        const Recipe = {
            name: event.target[0].value,
            color: event.target[1].value,
            passwerd: event.target[2].value,
            cost: event.target[3].value
        }
        //add to state
        //הפעלת פעולה על הסטור באמצעות דיספאצ
      
        dispatch(AddRecipe(Recipe))
        alert("xdfcgvhbnjmk,")
    }

    return <>
        <h1>Add Recipe:</h1>

        <form onSubmit={(e) => send(e)}>
            <label htmlFor={'name'}>Name:</label><br></br>
            <input id={'name'} placeholder={'input name'}></input>
            <br></br>
            <label htmlFor={'color'}>Color:</label><br></br>
            <input id={'color'} placeholder={'input color'}></input>
            <br></br>
            <label htmlFor={'pass'}>Password:</label><br></br>
            <input id={'pass'} type={'password'} placeholder={'input password'}></input>
            <br></br>
            <label htmlFor={'price'}>cost:</label><br></br>
            <input id={'price'} placeholder={'input price'}></input>
            <br></br>
           <input type={'submit'} value={'send'}></input>
            <br></br>
        </form>
    </>
}


export default AddR;
