import React from "react";
import styled from "styled-components";

import Input from "../../../component/ui/Input";

const Wrapper = styled.div`
    width: 500px;
    padding: 10px;
    background: pink;
`;

function InputTest(props) {
    return (
        <Wrapper>
            <Input
                type="text"
                onChange={() => console.log("change")}
            />
        </Wrapper>
    );
}

export default InputTest;