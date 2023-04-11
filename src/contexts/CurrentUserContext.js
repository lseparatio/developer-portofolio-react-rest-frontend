import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { axiosReq, axiosRes } from '../api/axiosDefaults';
import { useNavigate } from 'react-router-dom';
import { logOut, removeTokenTimestamp, shouldRefreshToken, shouldUpdateUser } from '../utils/utils';

const CurrentUserContext = createContext();
const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [profileData, setProfileData] = useState(null);
    const navigate = useNavigate();

    const handleMount = async () => {
        if (shouldUpdateUser()) {
            try {
                const { data } = await axiosRes.get("dj-rest-auth/user/");
                setCurrentUser(data);
            } catch (err) {
                //console.log(err);
            }
        }
    };

    useEffect(() => {
        handleMount();
    }, []);

    useMemo(() => {
        axiosReq.interceptors.request.use(
            async (config) => {
                if (shouldRefreshToken()) {
                    try {
                        await axios.post("dj-rest-auth/token/refresh/");
                    } catch (err) {
                        setCurrentUser((prevCurrentUser) => {
                            if (prevCurrentUser) {
                                navigate("/");
                            }
                            return null;
                        });
                        removeTokenTimestamp();
                        logOut();
                        return config;
                    }
                }
                return config;
            },
            (err) => {
                return Promise.reject(err);
            }
        );

        axiosRes.interceptors.response.use(
            (response) => response,
            async (err) => {
                if (err.response?.status === 401) {
                    try {
                        await axios.post("dj-rest-auth/token/refresh/");
                    } catch (err) {
                        setCurrentUser((prevCurrentUser) => {
                            if (prevCurrentUser) {
                                navigate("/");
                            }
                            return null;
                        });
                        removeTokenTimestamp();
                        logOut();
                    }
                    return axios(err.config);
                }
                return Promise.reject(err);
            }
        );
    }, [navigate]);

    // As soon as there is a user or user is updated we want to fetch user profile.
    useEffect(() => {
        // Make request only if is an user there. 
        if (currentUser) {
            const fetchData = async () => {
                try {
                    const { data } = await axiosReq.get(`/profiles/${currentUser?.profile_id}/`);
                    setProfileData(data);
                } catch (err) {
                    // console.log(err);
                }
            }
            fetchData()
        }
    }, [currentUser])

    return (
        <CurrentUserContext.Provider value={[currentUser, profileData]}>
            <SetCurrentUserContext.Provider value={[setCurrentUser, setProfileData]}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    )

};