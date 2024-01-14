import React from "react";
import styled from "styled-components";

const InnerImage = styled.img`
    width: 100%;
    height: 100%;
`;

function Image(props) {
    const { src, onClick } = props;

    return <InnerImage src={src} onClick={onClick} />;
}

export default Image;