import { Header } from "./Header";
import { Home } from "./Home";
import styled from "styled-components";

const StyledMain = styled.div`
     {
        // background: rgb(232, 243, 255);
        // background: -moz-linear-gradient(180deg, rgba(232, 243, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
        // background: -webkit-linear-gradient(180deg, rgba(232, 243, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
        // background: linear-gradient(180deg, rgba(232, 243, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
        // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e8f3ff",endColorstr="#ffffff",GradientType=1);

        background: rgb(204, 218, 255);
        background: -moz-linear-gradient(
            164deg,
            rgba(204, 218, 255, 1) 0%,
            rgba(143, 207, 250, 1) 14%,
            rgba(83, 182, 233, 1) 36%,
            rgba(22, 159, 200, 1) 64%,
            rgba(50, 82, 147, 1) 100%
        );
        background: -webkit-linear-gradient(
            164deg,
            rgba(204, 218, 255, 1) 0%,
            rgba(143, 207, 250, 1) 14%,
            rgba(83, 182, 233, 1) 36%,
            rgba(22, 159, 200, 1) 64%,
            rgba(50, 82, 147, 1) 100%
        );
        background: linear-gradient(
            164deg,
            rgba(204, 218, 255, 1) 0%,
            rgba(143, 207, 250, 1) 14%,
            rgba(83, 182, 233, 1) 36%,
            rgba(22, 159, 200, 1) 64%,
            rgba(50, 82, 147, 1) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ccdaff",endColorstr="#325293",GradientType=1);
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

// background: rgb(96, 163, 224);
//         background: -moz-linear-gradient(180deg, rgba(96, 163, 224, 1) 0%, rgba(163, 191, 233, 1) 48%, rgba(231, 243, 255, 1) 100%);
//         background: -webkit-linear-gradient(180deg, rgba(96, 163, 224, 1) 0%, rgba(163, 191, 233, 1) 48%, rgba(231, 243, 255, 1) 100%);
//         background: linear-gradient(180deg, rgba(96, 163, 224, 1) 0%, rgba(163, 191, 233, 1) 48%, rgba(231, 243, 255, 1) 100%);
//         filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#60a3e0",endColorstr="#e7f3ff",GradientType=1);
