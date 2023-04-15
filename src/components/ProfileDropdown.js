import React from "react";
import axios from "axios";
import { useSetCurrentUser } from "../contexts/CurrentUserContext";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Link, useNavigate } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { logOut, removeTokenTimestamp } from "../utils/utils";

function ProfileDropdown() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const user = setCurrentUser[0];
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      user(null);
      navigate("/signin");
      removeTokenTimestamp();
      logOut();
      toast.warn("Your was sign out successfully!", {
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
      // console.log(err);
    }
  };

  const navDropdownTitle = (
    <FontAwesomeIcon icon={faGear} size="2xl" fixedWidth transform="up-2" />
  );

  return (
    <NavDropdown title={navDropdownTitle} id="settings-dropdown" align="end">
      <NavDropdown.Item
        as={Link}
        className="text-center"
        to={`/profile/${currentUser[0]?.username}`}
      >
        Profile
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} className="text-center" to={`/projects`}>
        Projects
      </NavDropdown.Item>
      <NavDropdown.Item className="text-center" href="#action/3.3">
        Orders
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item
        as={Link}
        to={"/"}
        className="text-center"
        onClick={handleSignOut}
      >
        Sign Out
      </NavDropdown.Item>
    </NavDropdown>
  );
}

export default ProfileDropdown;
