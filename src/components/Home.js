import styled from "styled-components";
import { Search } from "./generics/Inputs/Search";
import { TitlePrimary } from "./generics/Titles/TitlePrimary";

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
                <TitlePrimary />
                <Search />
            </div>
        </StyledContainer>
    );
};
