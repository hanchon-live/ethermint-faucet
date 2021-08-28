// src/components/signup-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonPrimary } from "../generics/Buttons/ButtonPrimary";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <ButtonPrimary
            onClick={() =>
                loginWithRedirect({
                    screen_hint: "signup",
                })
            }
            text="Sign Up"
            key="singUpButton"
            icon={faUserPlus}
        ></ButtonPrimary>
    );
};

export default SignupButton;
