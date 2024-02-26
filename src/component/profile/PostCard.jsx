import React from "react";
import styled from "styled-components";

import Image from "../ui/Image";

const Card = styled.div`
    overflow: hidden;
    height: 250px;
    margin: 9px;
    padding: 20px;
    background: white;
    border-radius: 10px;
`;

const ImageWrapper = styled.div`
    height: 100px;

    & img {
        height: inherit;
        object-fit: cover;
    }
`;

const Title = styled.h3`
    overflow: hidden;
    margin: 8px 0px;
    font-size: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const Text = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 14px;
    word-break: break-all;
    text-overflow: ellipsis;
`;

function PostCard(props) {
    const { title, content, thumbnail, onClick } = props;

    return (
        <Card onClick={onClick}>
            <ImageWrapper>
                <Image src={thumbnail} />
            </ImageWrapper>
            <Title>{title}</Title>
            <Text>{content}</Text>
        </Card>
    );
}

export default PostCard;