import React from "react";
import styled from "styled-components";

import Image from "../ui/Image";

const Post = styled.div`
    display: flex;
    width: 100%;
    height: 110px;
    margin-bottom: 10px;
    padding: 15px;
    border: 2px solid #064635;
    border-radius: 10px;
`;

const WrapperImage = styled.div`
    overflow: hidden;
    width: 120px;
    border-radius: 10px;
`;

const Content = styled.div`
    overflow: hidden;
    width: calc(100% - 120px);
    margin-left: 10px;
`;

const Title = styled.h3`
    overflow: hidden;
    margin-bottom: 3px;
    font-size: 18px;
    color: #064635;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const Text = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 13px;
    word-break: break-all;
    text-overflow: ellipsis;
`;

function PostItem(props) {
    const { title, content, thumbnail, onClick } = props;

    return (
        <Post onClick={onClick}>
            <WrapperImage>
                <Image src={thumbnail} />
            </WrapperImage>
            <Content>
                <Title>{title}</Title>
                <Text>{content}</Text>
            </Content>
        </Post>
    );
}

export default PostItem;