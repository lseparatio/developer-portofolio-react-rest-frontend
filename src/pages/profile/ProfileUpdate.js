import React from 'react'
import ProfileUpdateForm from '../../components/ProfileUpdateForm'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import NotFound from '../../components/NotFound'
import ChangePasswordForm from '../../components/ChangePasswordForm'
import { useProfileData } from '../../contexts/ProfileDataContext'
import NotificationToasts from '../../components/NotificationToasts'
import styles from "../../styles/ProfileUpdate.module.css"


const ProfileUpdate = () => {

  const currentUser = useCurrentUser();
  const profileData = useProfileData();


  if (currentUser?.profile_id?.toString() === profileData?.id?.toString()) {
    var loggedInComponents = (
      <div  className={styles.Container}>
        <NotificationToasts/>
        <ProfileUpdateForm />
        <ChangePasswordForm />
      
      </div>
    )
  } else {
    var loggedOutComponents = <NotFound />
  }



  return (
    <>
      {currentUser ? loggedInComponents : loggedOutComponents}
    </>
  )
}

export default ProfileUpdate