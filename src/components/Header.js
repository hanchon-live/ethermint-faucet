import { NavbarBase } from "./NavbarBase";
import styled from "styled-components";

const StyledHeader = styled.header`
     {
        padding-top: 0.7em;
    }
`;

export const Header = () => {
    return (
        <StyledHeader>
            <NavbarBase />
        </StyledHeader>
    );
};
