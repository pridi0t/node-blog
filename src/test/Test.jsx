import React from "react";
import { BrowserRouter } from "react-router-dom";

import ButtonTest from "./ui/ButtonTest"
import ImageTest from "./ui/ImageTest";
import ProfileCard from "../component/sidebar/ProfileCard";

function Test(props) {
    return (
        <BrowserRouter>
            <div>
                <ButtonTest />
                <hr/>
                <ImageTest />
                <hr/>
                <ProfileCard />
            </div>
        </BrowserRouter>
    );
}

export default Test;