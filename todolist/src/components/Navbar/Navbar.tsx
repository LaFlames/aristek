import React from 'react';
import tasksLogo from './tasks.svg'


export const Navbar = () => {
    return (
        <nav className={'navbar'}>
            <div className={'navbar_logoWrapper'}>
                <img src={tasksLogo} alt="tasksLogo"/>
            </div>
        </nav>
    );
};