import { Route, Routes } from 'react-router-dom'
import {Home} from './Home'
import { Login } from './Login'
import { All } from './AllRecipe'
import { Regiester } from './Register'
import { UpdateR } from './UpdateR'
import { AddR } from './AddR'
import { Details } from './Details'
import { AddP } from './Register'

export const Routing =()=>{
    return<>
<Routes>
    <Route path={'/'} element={<Home></Home>}></Route>
    <Route path={'Home'} element={<Home></Home>}></Route>
    <Route path={'Login'} element= {<Login></Login>}></Route>
    <Route path={'All'} element={<All></All>}>
    {/* <Route path={'Details/:name/:cost/:color/:password'} element={<Details></Details>}></Route> */}
    {/* <Route path={'UpdateR'} element={<UpdateR></UpdateR>}></Route> */}
      </Route>  
    <Route path={'AddR'} element={<AddR></AddR>}></Route>
    <Route path={'Regiester'} element={<Regiester></Regiester>}></Route>
    {/* <Route path={'AddP'} element={<AddP></AddP>}></Route> */}
</Routes>
    </>
}