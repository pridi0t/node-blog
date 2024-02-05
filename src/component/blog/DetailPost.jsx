import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const WrapperTitle = styled.div`
    display: inline-block;
    max-width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #064635;
`;

const Title = styled.h1`
    word-wrap: break-word;
`;

const Date = styled.div`
    margin: 10px 0px;

    & div {
        display: inline-block;
        width: 80px;
        margin-right: 10px;
        border-radius: 5px;
        background: #064635;
        color: white;
        text-align: center;
    }
    & p {
        display: inline;
    }
`;

function DetailPost(props) {
    const { postData } = props;
    const { postId } = useParams();

    const post = postData.find((post) => post._id === postId);

    return (
        <>
            <WrapperTitle>
                <Title>{post.title}</Title>
            </WrapperTitle>
            <Date>
                <div>Created</div>
                <p>{post.created}</p>
            </Date>
            <Date>
                <div>Updated</div>
                <p>{post.updated}</p>
            </Date>
            <p>{post.content}</p>
        </>
    );
}

export default DetailPost;