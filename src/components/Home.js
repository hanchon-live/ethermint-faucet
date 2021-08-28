import styled from "styled-components";
import { Search } from "./generics/Inputs/Search";
import { TitlePrimary } from "./generics/Titles/TitlePrimary";
import Image from "react-bootstrap/Image";
import ethermintLogo from "../img/ethermintLogo.png";
import { ButtonPrimaryOutline } from "./generics/Buttons/ButtonPrimaryOutline";
const StyledContainer = styled.div`
     {
        align-items: center;
        display: flex;
        height: 80%;
        justify-content: center;
        padding: 1em;
        text-align: center;
    }
`;

export const Home = () => {
    return (
        <StyledContainer>
            <div>
                <Image width={100} alt="ethermint logo" src={ethermintLogo} />
                <TitlePrimary />
                <Search />
                <div className="mt-4">
                    <ButtonPrimaryOutline text="REQUEST FOUNDS" />
                </div>
            </div>
        </StyledContainer>
    );
};
