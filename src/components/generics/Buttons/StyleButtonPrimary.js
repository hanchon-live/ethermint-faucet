import Button from "react-bootstrap/Button";
import styled from "styled-components";

const style = `{
    background: rgb(61,107,153);
    background: -moz-linear-gradient(221deg, rgba(61,107,153,1) -1.08%, rgba(51,102,153,1) 95.88%);
    background: -webkit-linear-gradient(221deg, rgba(61,107,153,1) -1.08%, rgba(51,102,153,1) 95.88%);
    background: linear-gradient(221deg, rgba(61,107,153,1) -1.08%, rgba(51,102,153,1) 95.88%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d6b99",endColorstr="#336699",GradientType=1);
    border: 0;
}`;

export const StyledButtonPrimary = styled(Button)`
     {
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
    }
`;
