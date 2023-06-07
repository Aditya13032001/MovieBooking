import { Link } from 'react-router-dom'
import Logo from "../Assets/logo.png"



const Navbar = () => {
  return (
    <nav className='navbar ' >
      <div className='container'>
        <nav className='nav'>
          <h3 className='navbrand'>
            <Link to='/'>
              <img src={Logo} alt='logo' style={{width:"150px",height:'150px',border:"2px solid white"}}/>
            </Link>
          </h3>
          <ul className='nav_links'>
            <li className='links'> <Link to="/">Home</Link>  </li>
            <li className='links'> <Link to="/about"> About</Link>  </li>
          </ul>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar