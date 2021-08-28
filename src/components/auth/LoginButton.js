// src/components/login-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonPrimary } from "../generics/Buttons/ButtonPrimary";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return <ButtonPrimary onClick={() => loginWithRedirect()} text="Log In" icon={faSignInAlt} key="loginButton"></ButtonPrimary>;
};

export default LoginButton;
