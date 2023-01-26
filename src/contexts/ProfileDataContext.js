import { createContext, useContext, useEffect, useState } from 'react';
import { axiosReq } from '../api/axiosDefaults';
import { useCurrentUser } from './CurrentUserContext';


const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(null);
    const currentUser = useCurrentUser();



    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/profiles/${currentUser?.profile_id}/`);
                setProfileData(data);
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, [currentUser]);

    console.log(profileData)
    return (
        <ProfileDataContext.Provider value={profileData}>
            <SetProfileDataContext.Provider value={setProfileData}>
                {children}
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
    )

};