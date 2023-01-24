import React from 'react'
import { useCurrentUser} from '../../contexts/CurrentUserContext';

function ProfileDisplay() {

    const currentUser = useCurrentUser();
  return (
    <>
    <div>{currentUser?.pk}</div>
    <div>{currentUser?.username}</div>
    <div>{currentUser?.first_name}</div>
    <div>{currentUser?.last_name}</div>
    <div>{currentUser?.email}</div>
    <div>{currentUser?.profile_id}</div>
    
    </>
  )
}

export default ProfileDisplay