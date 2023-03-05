import React from 'react'
import { useCurrentUser } from '../contexts/CurrentUserContext'
import { NavLink } from "react-router-dom";

const Home = () => {
    const currentUser = useCurrentUser();
   // console.log(currentUser[0])
   // console.log(currentUser[1])
  return (
    <NavLink to={`/profile/update/${currentUser[0]?.profile_id}`} > Test </NavLink>
  )
}

export default Home