import Button from "react-bootstrap/Button";
import styled from "styled-components";

const style = `{
    background: #f9f9f9;
    
    color: rgb(61,107,153);
    font-weight: 600;
    border: 1px solid rgb(61,107,153);
    
}`;

const StyledButtonPrimaryOutline = styled(Button)`
     {
        ${style};
        box-shadow: 0 0 0 0;

        &:focus,
        .focus,
        :hover,
        :not(:disabled):not(.disabled):active,
        :not(:disabled):not(.disabled).active,
        show > .dropdown-toggle {
            box-shadow: 0 0 0 0;
            ${style};
        }
        &:not(:disabled):not(.disabled):active:focus,
        :not(:disabled):not(.disabled).active:focus,
        show > .dropdown-toggle:focus {
            box-shadow: 0 0 0 0rem rgba(0, 0, 0, 0);
            ${style};
        }
        &:hover {
            border: 1px solid rgb(61, 107, 153);
            background-color: #e9e9e9;
        }
        &:focus {
            border: 1px solid #fff;
            background-color: #e9e9e9;
        }
    }
`;

export const ButtonPrimaryOutline = (props) => {
    return <StyledButtonPrimaryOutline onClick={props.onClick}>{props.text}</StyledButtonPrimaryOutline>;
};
