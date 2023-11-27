import { Link, Outlet } from "react-router-dom"
import './index.css'

const Layout = () => {
  return (
    <>
    <div className="navbar">
    <Link to='/'>Home</Link>
    <Link to='contact'>Contact</Link>
    <Link to='about'>About</Link>
    <Link to='login'>Login</Link>
    </div>
    <Outlet/>
    {/* footeri burda yaziriq */}
    <div>
    <div className="footer">
      <h3>Footer</h3>
     <ul>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
    
     </ul>
    </div>
    </div>
    </>
  )
}

export default Layout
