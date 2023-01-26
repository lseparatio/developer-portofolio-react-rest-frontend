import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useProfileData } from "../../contexts/ProfileDataContext";

function ProfileDisplay() {
  const currentUser = useCurrentUser();

  const currentProfile = useProfileData();


  return (
    <>
      <div>{currentUser?.pk}</div>
      <div>{currentUser?.username}</div>
      <div>{currentUser?.first_name}</div>
      <div>{currentUser?.last_name}</div>
      <div>{currentUser?.email}</div>
      <div>{currentUser?.profile_id}</div>
      <div>{currentProfile?.birth_date}</div>
      <div>{currentProfile?.street_address1}</div>

    </>
  )
}

export default ProfileDisplay