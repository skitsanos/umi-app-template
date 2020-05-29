import {useSession} from '@/entities';
import React from 'react';

export default () =>
{
    const [session, {login, logout}] = useSession();

    return (
        <div>
            <div className={'h-box'}>
                <h1 className={'m0'}>&#9862; Page index</h1>
                <h3 className={'m0 ml'}>This is a blank template for your application</h3>
            </div>

            <div className={'p1 h-box'}>
                Logged in: {session.isLoggedIn ? `yes (${session.user.username})` : 'no'}
                <div className={'ml'}>
                    <a onClick={() =>
                    {
                        login({isLoggedIn: true, user: {username: 'demo-user'}});
                    }}>
                        Login
                    </a>{' '}
                    or{' '}
                    <a onClick={logout}>
                        Logout
                    </a>
                </div>
            </div>
        </div>
    );
};
