import { Link, NavLink } from 'react-router-dom'
export const Nav = () => {

    return <>
     <div className={'nav'}>
        {/* <h1>fghfjdks</h1> */}
        {/* <Nav><h1>hgjfkdl</h1></Nav> */}
        <NavLink to='Regiester' className={'Link'}>להרשמה</NavLink>
        <NavLink to='Login' className={'Link'}>התחברות</NavLink>
        <NavLink to= 'Home' className={'Link'}>דף הבית</NavLink>
        <NavLink to='All' className={'Link'}>כל המתכונים</NavLink>
     </div>
    </>
}