import React from 'react';
import { Link } from 'react-router-dom';

const LoginNav = () => {
  return (
    <div className='container-fluid pt-3 nav-background'>
        <nav className='row'>
            <Link className='col-md-1 ms-3 bg-white' to='/'>Back to Js Bin</Link>
            <ul className='col-md-10 d-flex justify-content-end gap-4 list-unstyled mb-0'>
                <li>
                    <Link to='/account' className='text-decoration-none'>Account</Link>
                </li>
                <li>
                    <Link to='/blogs' className='text-decoration-none'>Blogs</Link>
                </li>
                <li>
                    <Link to='/help' className='text-decoration-none'>Help</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default LoginNav;
