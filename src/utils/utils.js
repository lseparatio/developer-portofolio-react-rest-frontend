import jwtDecode from "jwt-decode";

export const setTokenTimestamp = (data) => {
    const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
    localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

export const shouldRefreshToken = () => {
    return !!localStorage.getItem("refreshTokenTimestamp");
};

export const removeTokenTimestamp = () => {
    localStorage.removeItem("refreshTokenTimestamp");
};

export const isLogedIn = () => {
    localStorage.setItem("isLogedIn", true);
}

export const shouldUpdateUser = () => {
    return !!localStorage.getItem("isLogedIn");
}

export const logOut = () => {
    localStorage.removeItem("isLogedIn");
}