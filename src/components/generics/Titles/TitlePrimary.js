import styled from "styled-components";

const StyledTitle = styled.p`
     {
        font-size: 3rem;
        color: white;
    }
`;

export const TitlePrimary = () => {
    return <StyledTitle>Ethermint testnet faucet</StyledTitle>;
};
