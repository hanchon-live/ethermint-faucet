// src/components/authentication-button.js

import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";
import SignupButton from "./SignupButton";

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? <LogoutButton key="logoutButton" /> : [<LoginButton key="loginButton" />, <SignupButton key="singupButton" />];
};

export default AuthenticationButton;
