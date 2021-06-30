import React, { useState, useContext } from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import Cart from './svg/shopping-cart-solid.svg';
import { Link } from 'react-router-dom';
import { Navbar, Button, Nav , Card} from 'react-bootstrap';
import { DataContext } from './DataProvider'
import Switch from 'react-bootstrap/esm/Switch';

export default function Header() {

    const [menu, setMenu] = useState(false);
    const value = useContext(DataContext);
    const [cart] = value.cart;

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
    return (
        <div>
        {/* <div>
     <header>
          <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt=" " width="30" />
            </div>

            <div className="logo">
                <h1><Link to="/products">TITAN</Link></h1>
            </div>
            <ul style={styleMenu}>
                <li><Link to="/clock">Clock</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login / Register</Link></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt=" " width="30" className="memu" />
                </li>
            </ul>

            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>
 
       </header> 
  </div> */}
        < div >
            <Navbar bg="light" expand="lg" sticky="top">
                {/* <Navbar.Brand><Link to="/products">TITAN</Link></Navbar.Brand> */}
                <div className="menu" onClick={toggleMenu}>
                    <img src={Menu} alt=" " width="30" />
                </div>
                <div className="logo">
                    <h1><Link style={{color: 'blue' }}to="/products">TITAN</Link></h1>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link >
                            <Link style={{color: 'black', fontSize: '15px'}} to="/clock">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link style={{color: 'black', fontSize: '15px'}} to="/products">Products</Link>
                        </Nav.Link>
                        {/* <Nav.Link>
                            <Link to="/about">About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact">Contact</Link>
                        </Nav.Link> */}
                        <Nav.Link>
                            <Link style={{color: 'black', fontSize: '15px'}} to="/login">Login</Link>
                        </Nav.Link>
                        {/* <ul style={styleMenu}>
                            <li onClick={toggleMenu}>
                                <img src={Close} alt=" " width="30" className="memu" />
                            </li>
                        </ul> */}
                    </Nav>
                </Navbar.Collapse>
                <div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>

            </Navbar>

         </div >
        </div>



    )
}