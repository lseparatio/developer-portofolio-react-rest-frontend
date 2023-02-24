import React from 'react'
import ProfileUpdateForm from '../../components/ProfileUpdateForm'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import NotFound from '../../components/NotFound'
import ChangePasswordForm from '../../components/ChangePasswordForm'
import styles from "../../styles/ProfileUpdate.module.css"


const ProfileUpdate = () => {

  const currentUser = useCurrentUser();
  const user = currentUser[0]
  const profile = currentUser[1]


  if (user?.profile_id?.toString() === profile?.id?.toString()) {
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
      {user ? loggedInComponents : loggedOutComponents}
    </>
  )
}

export default ProfileUpdate