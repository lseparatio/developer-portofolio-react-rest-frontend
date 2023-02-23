import { useCurrentUser } from '../../contexts/CurrentUserContext';
import NotFound from '../../components/NotFound';

function ProfileDisplay() {
  const currentUser = useCurrentUser();
  const user = currentUser[0]
  const profile = currentUser[1]


  const loggedOutComponents = (<NotFound />)

  const loggedInComponents = (
    <>
      <div>{user?.pk}</div>
      <div>{user?.username}</div>
      <div>{user?.first_name}</div>
      <div>{user?.last_name}</div>
      <div>{user?.email}</div>
      <div>{user?.profile_id}</div>
      <div>{profile?.birth_date}</div>
      <div>{profile?.street_address1}</div>
      <div>{profile?.street_address2}</div>
    </>
  )

  return (
    <>
      {user ? loggedInComponents : loggedOutComponents}
    </>
  )
}

export default ProfileDisplay