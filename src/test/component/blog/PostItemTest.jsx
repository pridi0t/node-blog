import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import postData from "../../../data/postData.json";
import PostItem from "../../../component/blog/PostItem";
import PostItemList from "../../../component/blog/PostItemList";

const Wrapper = styled.div`
    width: 700px;
    padding: 20px;
`;

function PostItemTest(props) {
    const navigate = useNavigate();
    const PER_PAGE = 5;
    
    let list = postData.sort(function(a, b) {
        return a.updated.localeCompare(b.updated);
    })
    list = list.slice(0, PER_PAGE);

    return (
        <>
            <h3>PostItem TEST</h3>
            <Wrapper>
                <p>PostListItem</p>
                <PostItem
                    title={list[0].title}
                    content={list[0].content}
                    thumbnail={`/image/default-post-thumbnail.png`}
                    onClick={() => navigate(`/blog/post/:${list[0]._id}`)}
                />
                <p>PostList</p>
                <PostItemList
                    list={list}
                />
            </Wrapper>
        </>
    );
}

export default PostItemTest;