import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../logo.svg' //just a link to logo
import {ButtonContainer, NavWrapper} from './Styled'

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/*
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk*/}
                <Link to='/' >
                    <img src={logo} alt="logo" className='navbar-brand'/> {/*logo as a link*/}
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className='nav-link'>Products</Link>
                    </li>
                </ul>
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