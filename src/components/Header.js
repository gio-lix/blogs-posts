import {Link} from 'react-router-dom'
import React from 'react';

const Header = () => {
    return (
        <header className='w-full  h-10 bg-indigo-800'>
            <nav  className='h-full '>
                <ul className='flex justify-center space-x-5 items-center h-full ' >
                    <li>
                        <Link to="/">
                            <a className='hover:text-amber-500 uppercase font-semibold'>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="post">
                            <a className='hover:text-amber-500 uppercase font-semibold'>Post</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="user">
                            <a className='hover:text-amber-500 uppercase font-semibold'>User</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;