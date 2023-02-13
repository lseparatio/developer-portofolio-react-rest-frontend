import React from 'react'
import ProfileUpdateForm from '../../components/ProfileUpdateForm'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import NotFound from '../../components/NotFound'

const ProfileUpdate = () => {
  const currentUser = useCurrentUser();

  const loggedOutComponents = (<NotFound />)

  const loggedInComponents = (
    <ProfileUpdateForm />
  )
  return (
    <>
      {currentUser ? loggedInComponents : loggedOutComponents}
    </>
  )
}

export default ProfileUpdate