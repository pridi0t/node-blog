import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
    margin-right: 5px;
    padding: 2px 10px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 12px;
    background: #F0BB62;
`;

function Button(props) {
    const { name, onClick } = props;

    return <CustomButton onClick={onClick}>{name}</CustomButton>;
}

export default Button;