import React from "react";
import styled from "styled-components";

import Image from "../../../component/ui/Image";

const TestImage = styled.div`
    overflow: hidden;
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

function ImageTest(props) {
    return (
        <>
            <h3>Image TEST</h3>
            <TestImage>
                <Image
                    src={`/image/blog1.png`}
                    onClick={() => console.log("image click")}
                />
            </TestImage>
        </>
    );
}

export default ImageTest;