
import { useNavigate, Outlet, redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const All =()=>{

        //get from state
        //שליפות מהסטור באמצתעות סלקטור
        const list = useSelector(x => x.Recipes)
    
        let nav = useNavigate()
        const AddR = () => {
            // swal("Hello!", "you move to page that you can add product!", "success");
             // ניתוב מתוך קומפוננטה לניתוב כלךשהו שהוגדר בדף הראוטינג
               nav('/AddR/')
            }
        const show = (c) => {
            nav(`Details/${c.name}/${c.color}/${c.cost}/${c.password}`)
        }
        let category=list.category
        let color
    if(category==1)
        color=red
    if(category==2)
       color=yellow
    if(category==3)
       color=blue
    else
        color=green
    
        return <>
            {/* <h1>{list.length}</h1> */}
            <button onClick={AddR}>add Recipe:</button>
            {list.map(i => <div className='recipe'> <p key={i.name}>{i.name}</p> <button onClick={() => show(i)}>show details</button></div>)}
            {/* קומפוננטה שמאפשרת טעינת ילדים */}
            {/* היכן שנטען את הקומפוננטה הזו - שם יטען הילד */}
           
            <Outlet></Outlet>
        </>
    }
