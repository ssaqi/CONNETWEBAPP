import './Style.css';
import LOGO from '../Assests/logo.jpeg'
import { Link } from 'react-router-dom';
function Header(){

    return(

        <>
        
  <nav className="navbar navbar-expand-lg" style={{background:"#000"}}>
  <div className="container" >
  <Link to={"/"}>   
  <a className="navbar-brand me-5" href="#">
     <img
      src={LOGO}
      className='logo'
      />
    </a>
    </Link>
 
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="mx-auto navbar-nav">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            active
            style={{color:"#fff"}}
          >
              Platform
          </a>
          <ul className="dropdown-menu">
            <h6 style={{fontWeight:"bold",marginLeft:18,fontSize:18}}>Features</h6>
            <li>
            <Link to={"/card"}
               className="dropdown-item" style={{fontWeight:"bold"}}  >
                Create a card
              </Link>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{color:"#fff"}}
          >
            Solutions
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{color:"#fff"}}
          >
            Resouces
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{color:"#fff"}}
          >
            Pricing
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  style={{color:"#fff"}}>
             contact Sales
          </a>
        </li>
      </ul>
      <button type="button" className="btn btn-outline-secondary btn-lg" style={{color:"#fff"}}>Log In</button>
      <button type="button" class="btn btn-dark btn-lg mx-3">Create a card</button>

     
    </div>

  </div>
</nav>

        
        </>
    )
}


export default Header