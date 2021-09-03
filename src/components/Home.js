import styled from "styled-components";
import { Search } from "./generics/Inputs/Search";
import { TitlePrimary } from "./generics/Titles/TitlePrimary";
import Image from "react-bootstrap/Image";
import ethermintLogo from "../img/ethermintLogo.png";
import { ButtonPrimaryOutline } from "./generics/Buttons/ButtonPrimaryOutline";
import { useSelector } from "react-redux";
import { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

import { setFaucet } from "../redux/features/faucet";
import { useDispatch } from "react-redux";

const API_ENDPOINT = process.env.REACT_APP_FAUCET_API_URL || "https://faucet.hanchon.live/api/"

async function setFaucetInfo(dispatch) {
    const response = await fetch(API_ENDPOINT, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const responseData = await response.json();
    dispatch(setFaucet(responseData));
}

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
    const dispatch = useDispatch();
    useEffect(async () => {
        await setFaucetInfo(dispatch);
    });

    const address = useSelector((state) => state.address.value);
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const callRequestFounds = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(API_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ address: address }),
            });

            const responseData = await response.json();
            if (responseData.transactionHash) {
                Swal.fire("Transaction Sent!", `Transaction sent with hash: ${responseData.transactionHash}`, "success");
            } else {
                if (responseData.error) {
                    if (responseData.error.includes("invalid address")) {
                        Swal.fire({
                            title: "Error!",
                            text: "Invalid address",
                            icon: "error",
                            confirmButtonText: "OK",
                        });
                        return;
                    }
                }
                Swal.fire({
                    title: "Error!",
                    text: "Transaction error!",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Transaction error!",
                icon: "error",
                confirmButtonText: "OK",
            });
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
