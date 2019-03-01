import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../logo.png' //just a link to logo
import {ButtonContainer, NavWrapper} from './Styled'

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 d-flex">
                <Link to='/' >
                    <img src={logo} alt="logo" className='navbar-brand logoImg'/>
                </Link>
                <ul className="navbar-nav align-items-center flex-grow-1">
                    <li className="nav-item ml-5">
                        <Link to='/' className='nav-link'>Products</Link>
                    </li>
                </ul>

                    <Link to='/login' className='nav-link '>Login</Link>
                    <Link to='/signup' className='nav-link'>Sign Up</Link>

                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" /> My Cart
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}


export default Navbar;