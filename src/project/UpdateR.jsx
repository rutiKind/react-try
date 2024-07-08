import { setProduct } from "./Redux/Action"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useNavigate } from "react-router-dom"
//import { Update } from "../lesson71/Update"
export const UpdateR=()=>{
        const dispatch = useDispatch()
          
        const list = useSelector(x => x.Recipies)

    const send = (event) => {
        event.preventDefault()
        
        const Recipe = {
            name: event.target[0].value,
            color: event.target[1].value,
            passwerd: event.target[2].value,
            cost: event.target[3].value
        }
        let newList = list.filter(x => x.password == Recipe.passwerd)
        if (newList != null) {
            list.products[newList] = Recipe
        }
        //add to state
        //הפעלת פעולה על הסטור באמצעות דיספאצ
      
        dispatch(setProduct(list))
        //  nav('/SayPage/')
        
        
    }

    return <>
        <h1>Update:</h1>

        <form onSubmit={(e) => send(e)}>
            <label htmlFor={'name'}>Name:</label><br></br>
            <input  id={'name'} ></input>
            <br></br>
            <label htmlFor={'color'}>Color:</label><br></br>
            <input id={'color'} type={'color'} placeholder={'input color'}></input>
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
export default UpdateR;

