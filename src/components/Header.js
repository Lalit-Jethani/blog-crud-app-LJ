import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import DeleteAllPosts from '../components/DeleteAllPosts';


function Header(props) {

    return (
        <nav className='navbar navbar-expand-sm bg-info navbar-dark fixed-top' >
            <Link to='/' className='navbar-brand cursor-style'>Blog App Home</Link>
            <ul className='nav navbar-nav'>
                <li className='nav-item'>
                    {props.location.pathname === '/' && <DeleteAllPosts />}
                </li>
            </ul>
        </nav>
    )
}



export default withRouter(Header);