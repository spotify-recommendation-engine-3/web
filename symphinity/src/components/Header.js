import React from 'react';
import logo from '../images/logo.png';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('user_id');
        localStorage.removeItem('spotifyAuthToken');
        history.push('/');
    }

    return (
        <nav className='navbar is-fixed-top level' role='navigation' aria-label='main navigation'>
            <div className="level-left">
                <div className="level-item navbar-brand">
                    <a className='navbar-item' href='/'>
                        <img width='200px' src={logo} alt='logo' />
                    </a>
                </div>
            </div>

            <div className="level-right" style={{ display: 'flex'}}>
                <p className="level-item items-in-nav"><a href='/'>Your Songs</a></p>
                <p className="level-item items-in-nav"><a href='/userprofile'>Favorites</a></p>
                <p className="level-item items-in-nav"><a href='/login'>Login</a></p>
                <p className="level-item items-in-nav"><a href='/register' className="button is-success">Register</a></p>
                <button onClick={logout} className="button is-dark">Logout</button>
            </div>
        </nav>
    )
}

export default Header;