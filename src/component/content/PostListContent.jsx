import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import PostList from "./PostList";
import Button from "../ui/Button";

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 30px;
    color: #064635;
`;

const WrapperButton = styled.div`
    margin-top: 20px;
    text-align: right;
`;

function PostListContent(props) {
    const navigate = useNavigate();
    const { title, list } = props;
    
    return (
        <>
            <Title>{title}</Title>
            <PostList list={list}/>
            <WrapperButton>
                <Button
                    name="Previous"
                    onClick={() => navigate("#")}
                    color="white"
                    background="#064635"
                />
                <Button
                    name="Next"
                    onClick={() => navigate("#")}
                    color="white"
                    background="#064635"
                />
            </WrapperButton>
        </>
    );
}

export default PostListContent;