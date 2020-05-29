import {useSession} from '@/entities';
import React from 'react';
import styles from './index.less';

export default () =>
{
    const [session, {login, logout}] = useSession();

    return (
        <div>
            <h1 className={styles.title}>Page index</h1>

            <div className="App">
                Logged in: {session.isLoggedIn ? `yes (${session.user.username})` : 'no'}
                <div>
                    <a onClick={() =>
                    {
                        login({isLoggedIn: true, user: {username: 'skitsanos'}});
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
