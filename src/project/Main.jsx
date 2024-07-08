import { Nav } from "./Nav" 
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./Routing"
import './style.css'
import { Provider, useSelector } from 'react-redux'
import store from "./Redux/store"


export const Main=()=>{
    return <>
     <Provider store={store}>
       <BrowserRouter>
            {/* nav טוענת את ה */}
            <Nav></Nav>
            {/* טוענת את כל הצהרות הניתובים */}
           <Routing></Routing> 
        </BrowserRouter>
        </Provider>
   
    </>
}
