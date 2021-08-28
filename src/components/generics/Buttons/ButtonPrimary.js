import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const style = `{
    background: rgb(61,107,153);
    background: -moz-linear-gradient(221deg, rgba(61,107,153,1) -1.08%, rgba(51,102,153,1) 95.88%);
    background: -webkit-linear-gradient(221deg, rgba(61,107,153,1) -1.08%, rgba(51,102,153,1) 95.88%);
    background: linear-gradient(221deg, rgba(61,107,153,1) -1.08%, rgba(51,102,153,1) 95.88%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d6b99",endColorstr="#336699",GradientType=1);
    border: 1px solid rgb(61,107,153);
    align-items: center;
    display: flex;
    font-weight: 600;
    text-transform: uppercase;
   }`;

const StyledButtonPrimary = styled(Button)`
     {
        svg {
            padding-left: 0.2rem;
        }

        ${style};
        box-shadow: 0 0 0 0;

        &:focus,
        .focus,
        :not(:disabled):not(.disabled):active,
        :not(:disabled):not(.disabled).active,
        show > .dropdown-toggle {
            box-shadow: 0 0 0 0;
        }
        &:not(:disabled):not(.disabled):active:focus,
        :not(:disabled):not(.disabled).active:focus,
        show > .dropdown-toggle:focus {
            box-shadow: 0 0 0 0rem rgba(0, 0, 0, 0);
        }

        &:focus {
            border: 1px solid #6fa8e2;
            background-color: rgb(61, 107, 153);
        }
    }
`;

export const ButtonPrimary = (props) => {
    return (
        <div>
            <StyledButtonPrimary>
                {props.text}
                <FontAwesomeIcon icon={faSignInAlt} />
            </StyledButtonPrimary>
        </div>
    );
};
