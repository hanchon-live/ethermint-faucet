import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Image from "react-bootstrap/Image";
import { ButtonPrimary } from "./generics/Buttons/ButtonPrimary";
import { ButtonPrimaryOutline } from "./generics/Buttons/ButtonPrimaryOutline";
import ethermint from "../img/ethermint.png";
import styled from "styled-components";

const StyledNav = styled(Nav)`
     {
        button {
            margin-left: 1em;
        }
    }
`;

export const NavbarBase = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <Image alt="Ethermint logo" src={ethermint} width="30" height="30" /> Ethermint
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="ethermint-nav" />
                <Navbar.Collapse id="ethermint-nav" className="justify-content-end">
                    <StyledNav>
                        <ButtonPrimaryOutline text="Login" />
                        <ButtonPrimary text="Request refunds" />
                    </StyledNav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
