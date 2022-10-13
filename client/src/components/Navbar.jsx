import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../imgs/blog-logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div >
                    <img className='logo' src={Logo} alt='' />
                </div>
                <div className="links">
                    <Link className='link' to='/?category=algo'>
                        <h6>ALGO</h6>
                    </Link>
                    <Link className='link' to='/?category=dev'>
                        <h6>Dev</h6>
                    </Link>
                    <span>John</span>
                    <span>Logout</span>
                    <span className='write'>
                        <Link className='link' to="write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar