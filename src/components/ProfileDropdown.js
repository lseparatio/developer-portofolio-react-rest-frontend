import React from 'react'
import axios from "axios";
import { useSetCurrentUser, } from '../contexts/CurrentUserContext';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useCurrentUser, } from '../contexts/CurrentUserContext';
import { Link, useNavigate } from 'react-router-dom';
import { Flip, toast } from 'react-toastify';


function ProfileDropdown() {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const user = setCurrentUser[0]
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            user(null);
            navigate("/signin");
            toast.warn('Your was sign out successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                transition: Flip,
                progress: undefined,
                theme: "light",
            });
        } catch (err) {
            console.log(err);

        }
    };

    const navDropdownTitle = (<i className="fa-solid fa-gear fa-2xl"></i>)

    return (
        <NavDropdown title={navDropdownTitle} id="settings-dropdown" align="end">
            <NavDropdown.Item as={Link} className="text-center" to={`/profile/${currentUser[0]?.username}`}>
                Profile
            </NavDropdown.Item>
            <NavDropdown.Item className="text-center" href="#action/3.2">
                Projects
            </NavDropdown.Item>
            <NavDropdown.Item className="text-center" href="#action/3.3">
                Orders
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to={'/'} className="text-center" onClick={handleSignOut}>
                Sign Out
            </NavDropdown.Item>
        </NavDropdown>
    )
}

export default ProfileDropdown

