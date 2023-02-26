import { useCurrentUser } from '../../contexts/CurrentUserContext';
import NotFound from '../../components/NotFound';
import { Col, Image } from 'react-bootstrap';

function ProfileDisplay() {
  const currentUser = useCurrentUser();
  const user = currentUser[0]
  const profile = currentUser[1]
  console.log(profile)




  const loggedOutComponents = (<NotFound />)

  const loggedInComponents = (
    <>
           <Col md={6}>
          <Image fluid src={profile?.image} alt='Two persones filling a form'></Image>
        </Col>
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