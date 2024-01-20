import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import postData from "../../../data/postData.json";
import PostListItem from "../../../component/content/PostListItem";
import PostList from "../../../component/content/PostList";

const Wrapper = styled.div`
    width: 700px;
    height: 180px;
    padding: 20px;
`;

function PostListTest(props) {
    const navigate = useNavigate();
    const PER_PAGE = 5;
    
    let list = postData.sort(function(a, b) {
        return a.updated.localeCompare(b.updated);
    })
    list = list.slice(0, PER_PAGE);

    return (
        <Wrapper>
            <p>PostListItem</p>
            <PostListItem
                title={list[0].title}
                content={list[0].content}
                thumbnail={`/image/default-post-thumbnail.png`}
                onClick={() => navigate(`/blog/post/:${list[0]._id}`)}
            />
            <p>PostList</p>
            <PostList
                list={list}
            />
        </Wrapper>
    );
}

export default PostListTest;