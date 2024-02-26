import React from "react";
import styled from "styled-components";

const CustomTextarea = styled.textarea`
    width: 590px;
    min-width: 340px;
    max-width: 100%;
    min-height: 530px;
    padding: 10px;
    border: 2px solid #064635;
`;

function TextArea(props) {
    const { text, onChange } = props;

    return <CustomTextarea onChange={onChange} value={text} />;
}

export default TextArea;