import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
    margin-right: 5px;
    padding: 2px 10px;
    border: 1px solid black;
    border-radius: 5px;
    color: ${(props) => props.$color ? props.$color : "black"};
    font-size: 12px;
    background: ${(props) => props.$background ? props.$background : "#F0BB62"};
`;

function Button(props) {
    const { name, onClick, color, background } = props;

    return <CustomButton 
                onClick={onClick} 
                $background={background}
                $color={color}
            >{name}</CustomButton>;
}

export default Button;