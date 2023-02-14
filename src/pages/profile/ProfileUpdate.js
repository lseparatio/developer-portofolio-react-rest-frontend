import React from 'react'
import ProfileUpdateForm from '../../components/ProfileUpdateForm'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import NotFound from '../../components/NotFound'
import ChangePasswordForm from '../../components/ChangePasswordForm'
import { useProfileData } from '../../contexts/ProfileDataContext'


const ProfileUpdate = () => {

  const currentUser = useCurrentUser();
  const profileData = useProfileData();


  if (currentUser?.profile_id?.toString() === profileData?.id?.toString()) {
    var loggedInComponents = (
      <>
        <ProfileUpdateForm />
        <ChangePasswordForm />
      </>
    )
  } else {
    var loggedOutComponents = (<NotFound />)
  }



  return (
    <>
      {currentUser ? loggedInComponents : loggedOutComponents}
    </>
  )
}

export default ProfileUpdate