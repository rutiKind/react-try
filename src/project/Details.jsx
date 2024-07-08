import { useParams } from 'react-router-dom'
// import { All } from './AllRecipe'
// import { useState } from 'react'
// import swal from "sweetalert"
import { useNavigate } from 'react-router-dom'
import UpdateR from './UpdateR'
// import { AddR } from './AddR'
// import { UpdateR } from './UpdateR'

export const Details=()=>{
let p=useParams()
let nav = useNavigate()

const Add = () => {
    // swal("Hello!", "you move to page that you can add product!", "success");
     // ניתוב מתוך קומפוננטה לניתוב כלךשהו שהוגדר בדף הראוטינג
       nav('/AddR/')
 }
 const UpdateR = (i) => {
     //swal("Hello!", "you move to page that you can update product!", "success");
     // ניתוב מתוך קומפוננטה לניתוב כלךשהו שהוגדר בדף הראוטינג
       nav('/UpdateR/')
 }

return <>
<div>
    
   {/* <input defaultValue={p.name} onBlur={(e) => { name1(e.target.value) }} type='text'></input>  */}
    <p>{p.name} שם מוצר:</p>
    <p>{p.color} צבע מוצר : </p>
    <p>{p.cost} מחיר מוצר: </p>
    <p>{p.password} קוד מוצר:</p>
    {/* <button onClick={AddR}>add product:</button> */}
    <button onClick={UpdateR}>update product:</button>
    {/* <button onClick={() => Show1()}>לעדכון מוצר</button> */}

    {/* <button >עידכון מוצר</button> */}
    {/* <input type='text' placeholder='לעדכון שם מוצר'></input>
    <input type='text' placeholder='לעדכון מחיר מוצר'></input>
    <input type='text' placeholder='לעדכון צבע מוצר'></input> */}
  

{/* //פונקציה שמפעילה את ההוספה שהתקבלה בפרופס */}

  {/* const {name1,cost1,color1}=props */}
    
 {/* swal(`שלום ${p.name}!`, "נרשמת בהצלחה למערכת", "success") */}

</div>

</>
}

