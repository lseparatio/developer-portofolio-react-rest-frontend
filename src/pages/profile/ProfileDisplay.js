import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useProfileData } from "../../contexts/ProfileDataContext";
import NotFound from '../../components/NotFound';

function ProfileDisplay() {
  const currentUser = useCurrentUser();

  const currentProfile = useProfileData();

  const loggedOutComponents = (<NotFound />)

  const loggedInComponents = (
    <>
      <div>{currentUser?.pk}</div>
      <div>{currentUser?.username}</div>
      <div>{currentUser?.first_name}</div>
      <div>{currentUser?.last_name}</div>
      <div>{currentUser?.email}</div>
      <div>{currentUser?.profile_id}</div>
      <div>{currentProfile?.birth_date}</div>
      <div>{currentProfile?.street_address1}</div>
      <div>{currentProfile?.street_address2}</div>
    </>
  )

  return (
    <>
      {currentUser ? loggedInComponents : loggedOutComponents}
    </>
  )
}

export default ProfileDisplay