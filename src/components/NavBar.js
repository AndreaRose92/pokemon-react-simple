
import { NavLink } from 'react-router-dom'

import '../styles/NavBar.css'

export default function NavBar() {
    return (
        <div className='navbar'>
            <NavLink to='/team' className='tomhanks'>Team</NavLink>
            <NavLink to='/explore' className='tomhanks'>Explore</NavLink>
            <NavLink to='/pokedex' className='tomhanks'>PokeDex</NavLink>
            {/* <NavLink to='' className='navlink'></NavLink> */}
        </div>
    )
}