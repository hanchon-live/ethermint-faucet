import { Header } from "./Header";
import { Home } from "./Home";
import styled from "styled-components";

const StyledMain = styled.div`
     {
        background: linear-gradient(to bottom, #2d91c2 0%, #1e528e 100%);

        height: 100vh;
    }
`;

export const Main = () => {
    return (
        <StyledMain>
            <Header />
            <Home />
        </StyledMain>
    );
};
