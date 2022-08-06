
import logo from '../assets/pokemon-logo-png-1444.png'
import '../styles/NavBar.css'

export default function NavBar() {
    return (
        <div>
            <img className='logo' src={logo} alt='logo' />
        </div>
    )
}