import styled from "styled-components";
import { Search } from "./generics/Inputs/Search";
import { TitlePrimary } from "./generics/Titles/TitlePrimary";
import Image from "react-bootstrap/Image";
import ethermintLogo from "../img/ethermintLogo.png";
import { ButtonPrimaryOutline } from "./generics/Buttons/ButtonPrimaryOutline";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

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
    const address = useSelector((state) => state.address.value);
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const callRequestFounds = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch("https://faucet.hanchon.live/api/faucet", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ address: address }),
            });

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
    };
    return isAuthenticated ? (
        <StyledContainer>
            <div>
                <Image width={100} alt="ethermint logo" src={ethermintLogo} />
                <TitlePrimary />
                <Search />
                <div className="mt-4">
                    <ButtonPrimaryOutline
                        text="REQUEST FOUNDS"
                        onClick={() => {
                            callRequestFounds();
                        }}
                    />
                </div>
            </div>
        </StyledContainer>
    ) : (
        <StyledContainer>
            <div>
                <Image width={100} alt="ethermint logo" src={ethermintLogo} />
                <TitlePrimary />
                <Search />
                <div className="mt-4">
                    <ButtonPrimaryOutline text="Log in to request founds" />
                </div>
            </div>
        </StyledContainer>
    );
};
