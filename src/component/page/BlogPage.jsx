import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import ProfileCard from "../sidebar/ProfileCard";
import CategoryList from "../sidebar/CategoryList"
import categoryData from "../../data/categoryData.json";

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 370px;
    min-height: 100%;
    padding: 150px 0px;
    background-color: #064635;
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

    return (
        <>
            <Sidebar>
                <ProfileCard
                    nickname={`USERID`}
                    imageSrc={`/image/defaultProfile.png`}
                    imageClick={() => navigate("/profile")}
                    buttonList={buttonList}
                />
                <CategoryList
                    list={categoryData}
                />
            </Sidebar>
        </>
    );
}

export default BlogPage;