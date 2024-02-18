import React from "react";
import styled from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom";

import ProfileCard from "../sidebar/ProfileCard";
import CategoryList from "../sidebar/CategoryList"
import PostListContent from "../blog/PostListContent";
import WritePost from "../blog/WritePost";
import DetailPost from "../blog/DetailPost";
import CategoryContent from "../blog/CategoryContent";

import categoryData from "../../data/categoryData.json";
import postData from "../../data/postData.json"

const Container = styled.div`
    display: flex;
    min-width: 1200px;
    min-height: 100%;
`;

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 370px;
    min-height: 100%;
    padding: 150px 0px;
    background: #064635;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 370px);
    min-height: 100%;
    background: #dee2e6;
`;

const Content = styled.div`
    max-width: 1000px;
    padding: 60px 100px;
    background: white;
    box-sizing: border-box;
`;

const buttonList = [
    {
        name: "Home",
        url: "/blog"
    },
    {
        name: "Info",
        url: "#"
    },
    {
        name: "Logout",
        url: "#"
    },
    {
        name: "write new",
        url: "/blog/post"
    },
];

function BlogPage(props) {
    const navigate = useNavigate();

    // 임시 데이터 (Post)
    let list = postData.sort(function(a, b) {
        return b.updated.localeCompare(a.updated);
    })
    
    return (
        <Container>
            <Sidebar>
                <ProfileCard
                    nickname="USERID"
                    imageSrc="/image/default-profileCard-profile.png"
                    imageClick={() => navigate("/profile")}
                    buttonList={buttonList}
                />
                <CategoryList
                    list={categoryData}
                />
            </Sidebar>
            <Wrapper>
                <Content>
                    <Routes>
                        <Route index element={<PostListContent title={`Recent Posts`} list={list} />}/>
                        <Route path="/post" element={<WritePost />} />
                        <Route path="/post/:postId" element={<DetailPost postData={postData}/>} />
                        <Route path="/post/main-category/:mainCategory" element={<CategoryContent list={postData}/>} />
                        <Route path="/post/main-category/:mainCategory/sub-category/:subCategory" element={<CategoryContent list={postData}/>} />
                    </Routes>
                </Content>
            </Wrapper>
        </Container>
    );
}

export default BlogPage;