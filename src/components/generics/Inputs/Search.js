import styled from "styled-components";
import FormControl from "react-bootstrap/FormControl";

import { setAddress } from "../../../redux/features/address";
import { useDispatch } from "react-redux";

const StyledFormControl = styled(FormControl)`
     {
        border-radius: 0.25rem;
        padding-left: 2rem;
        &:focus {
            color: unset;
            border: 1px solid #ced4da;
            outline: 0;
            box-shadow: none;
        }
    }
`;

export const Search = () => {
    const dispatch = useDispatch();
    return (
        <StyledFormControl
            type="email"
            placeholder="Ethermint address"
            aria-label="ethermint"
            onChange={(event) => {
                dispatch(setAddress(event.target.value));
            }}
        />
    );
};
