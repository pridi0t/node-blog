import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
    width: calc(100% - 140px);
    padding: 0px 10px;
    border: 1px solid #064635;
`;

function Input(props) {
    const { type, onChange } = props;

    return (
        <CustomInput
            type={type}
            onChange={onChange}
        />
    );
}

export default Input;