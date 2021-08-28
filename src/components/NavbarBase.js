import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Image from "react-bootstrap/Image";
import { ButtonPrimary } from "./generics/Buttons/ButtonPrimary";
import ethermintLogo from "../img/ethermintLogo.png";
import styled from "styled-components";

const StyledNav = styled(Nav)`
     {
        flex-direction: row;
        button {
            margin-left: 1em;
        }
    }
`;

const StyledCollapse = styled(Navbar.Collapse)`
     {
        flex-basis: auto;
        &.collapse:not(.show) {
            display: flex;
        }
    }
`;

const StyledBrandText = styled(Navbar.Brand)`
     {
        align-items: center;
        display: flex;
        span {
            padding-left: 0.2em;
            color: white;
        }
    }
`;

export const NavbarBase = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <StyledBrandText href="#">
                    <Image alt="Ethermint logo" src={ethermintLogo} width="30" height="30" />
                    <span> Ethermint</span>
                </StyledBrandText>
                <StyledCollapse id="ethermint-nav" className="justify-content-end">
                    <StyledNav>
                        <ButtonPrimary text="Login" />
                    </StyledNav>
                </StyledCollapse>
            </Container>
        </Navbar>
    );
};
