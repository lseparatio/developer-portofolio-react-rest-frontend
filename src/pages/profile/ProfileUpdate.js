import React from 'react'
import ProfileUpdateForm from '../../components/ProfileUpdateForm'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import NotFound from '../../components/NotFound'
import ChangePasswordForm from '../../components/ChangePasswordForm'
import styles from "../../styles/ProfileUpdate.module.css"


const ProfileUpdate = () => {

  const currentUser = useCurrentUser();


  if (currentUser[0]?.profile_id?.toString() === currentUser[1]?.id?.toString()) {
    var loggedInComponents = (
      <div  className={styles.Container}>
        <ProfileUpdateForm />
        <ChangePasswordForm />
      
      </div>
    )
  } else {
    var loggedOutComponents = <NotFound />
  }



  return (
    <>
      {currentUser[0] ? loggedInComponents : loggedOutComponents}
    </>
  )
}

export default ProfileUpdate