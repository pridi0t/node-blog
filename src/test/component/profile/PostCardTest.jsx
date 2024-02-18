import React from "react";
import styled from "styled-components";

import postData from "../../../data/postData.json";
import PostCard from "../../../component/profile/PostCard";
import PostCardList from "../../../component/profile/PostCardList";

const Wrapper = styled.div`
    width: 800px;
    background: gray;
`;

const WrapperPostCardList = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > div {
        width: 31%;
    }
`;

function PostCardTest(props) {
    const PER_PAGE = 5;
    const list = postData.slice(0, PER_PAGE);

    return (
        <Wrapper>
            <p>PostCard</p>
            <PostCard
                key={list[0]._id}
                title={list[0].title}
                content={list[0].content}
                thumbnail="/image/default-postcard-thumbnail.png"
                onClick={() => console.log("PostCard Click")}
            />
            <br />
            <p>PostCardList</p>
            <WrapperPostCardList>
                <PostCardList list={list} />
            </WrapperPostCardList>
        </Wrapper>
    );
}

export default PostCardTest;