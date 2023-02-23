import React from 'react'
import { useCurrentUser } from '../contexts/CurrentUserContext'

const Home = () => {
    const currentUser = useCurrentUser();
    console.log(currentUser[0])
    console.log(currentUser[1])
  return (
    <a href={`/profile/update/${currentUser[0]?.profile_id}`} > Test </a>
  )
}

export default Home