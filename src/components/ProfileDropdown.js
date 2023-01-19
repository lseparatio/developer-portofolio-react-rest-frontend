import React from 'react'
import axios from "axios";
import { useSetCurrentUser, } from '../contexts/CurrentUserContext';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ProfileDropdown() {

    const setCurrentUser = useSetCurrentUser();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const navDropdownTitle = (<i className="fa-solid fa-gear fa-2xl"></i>)

    return (
        <NavDropdown title={navDropdownTitle} id="settings-dropdown" align="end">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                Orders
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Projects</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleSignOut}>
                Sign Out
            </NavDropdown.Item>
        </NavDropdown>
    )
}

export default ProfileDropdown

