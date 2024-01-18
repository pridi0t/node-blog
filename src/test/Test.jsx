import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import ButtonTest from "../test/component/ui/ButtonTest"
import ImageTest from "../test/component/ui/ImageTest";
import ProfileCard from "../component/sidebar/ProfileCard";
import CategoryTest from "./component/sidebar/CategoryTest";

const Wrapper = styled.div`
    width: 400px;
    padding: 10px;
    background-color:#064635;
`

function Test(props) {
    return (
        <BrowserRouter>
            <ButtonTest />
            <hr/>
            <ImageTest />
            <hr/>
            <h3>Sidebar TEST</h3>
            <p>ProfileCard</p>
            <ProfileCard />
            <br/>
            <Wrapper>
                <CategoryTest/>
            </Wrapper>
        </BrowserRouter>
    );
}

export default Test;