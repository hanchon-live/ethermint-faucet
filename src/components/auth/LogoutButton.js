// src/components/logout-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonPrimary } from "../generics/Buttons/ButtonPrimary";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <ButtonPrimary
            onClick={() =>
                logout({
                    returnTo: window.location.origin,
                })
            }
            text="Log Out"
            icon={faSignOutAlt}
            key="logoutButton"
        ></ButtonPrimary>
    );
};

export default LogoutButton;
