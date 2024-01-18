import React from "react";
import styled from "styled-components";

import ProfileCard from "../sidebar/ProfileCard";
import CategoryList from "../sidebar/CategoryList"
import categoryData from "../../data/categoryData.json";

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 370px;
    min-height: 100%;
    box-sizing: border-box;
    padding: 150px 0px;
    background-color: #064635;
`;

function BlogPage(props) {
    return (
        <>
            <Sidebar>
                <ProfileCard />
                <CategoryList
                    list={categoryData}
                />
            </Sidebar>
        </>
    );
}

export default BlogPage;