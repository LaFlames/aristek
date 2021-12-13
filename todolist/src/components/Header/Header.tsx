import React from 'react';
import todoLogo from './assets/todo.svg'
import profilePhoto from './assets/icon.svg'
import arrow from './assets/arrow.svg'


export const Header = () => {
    return (
        <header className={'header'}>
            <div className={'header_logoWrapper'}>
                <div className={'header_logo'}>
                    <img src={todoLogo} alt="logo"/>
                    <span className={'header_logoTitle'}>To-Do</span>
                </div>
                <h2 className={'header_title'}>Tasks</h2>
            </div>
            <div className={'header_profileInfo'}>
                <h2 className={'header_profileName'}>Vitalik Kozlovsky</h2>
                <img src={profilePhoto} alt="profile photo"/>
                <img src={arrow} alt="arrow"/>
            </div>
        </header>
    );
};