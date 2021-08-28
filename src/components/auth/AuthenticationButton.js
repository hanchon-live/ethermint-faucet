// src/components/authentication-button.js

import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import { useAuth0, getAccessTokenSilently } from "@auth0/auth0-react";
import SignupButton from "./SignupButton";

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();
    console.log(isAuthenticated);
    const { getAccessTokenSilently } = isAuthenticated;
    console.log(getAccessTokenSilently);
    // import { useAuth0 } from "@auth0/auth0-react";
    // const { isAuthenticated } = useAuth0();
    // console.log(getAccessTokenSilently());
    return isAuthenticated ? <LogoutButton /> : [<LoginButton />, <SignupButton />];
};

export default AuthenticationButton;
