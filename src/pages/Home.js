import React from 'react'
import { useCurrentUser } from '../contexts/CurrentUserContext'
import { NavLink } from "react-router-dom";
import HomeHeroSection from '../components/HomeHeroSection';

const Home = () => {
  const currentUser = useCurrentUser();
  // console.log(currentUser[0])
  // console.log(currentUser[1])
  return (
    <>
      <HomeHeroSection />
      <NavLink to={`/profile/update/${currentUser[0]?.profile_id}`} > Work in progress </NavLink>
    </>
  )
}

export default Home