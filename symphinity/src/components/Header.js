import React from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';

const Header = () => {

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('spotifyAuthToken');
    }

    return (

        <div className='header'>
            <Nav>
                <NavItem>
                    <NavLink href="/usersongs">Your Songs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/userprofile">Profile</NavLink>
                </NavItem>
                {localStorage.getItem('token')
                ? <Button onClick={logout} color="primary">Logout</Button>
                : <> 
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/register">Register</NavLink>
                </NavItem> </>}
            </Nav>
        </div>
    )
}

export default Header;