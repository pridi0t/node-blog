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

const GreenButton = styled(Button)`
    background: none;
`;

function PostListContent(props) {
    const navigate = useNavigate();
    const { title, list } = props;
    
    return (
        <>
            <Title>{title}</Title>
            <PostList list={list}/>
            <GreenButton
                name={`Previous`}
                onClick={() => navigate("/#")}
            />
            <GreenButton
                name={`Next`}
                onClick={() => navigate("/#")}
            />
        </>
    );
}

export default PostListContent;