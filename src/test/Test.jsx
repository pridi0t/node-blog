import React from "react";
import { BrowserRouter } from "react-router-dom";

// import ButtonTest from "../test/component/ui/ButtonTest"
// import ImageTest from "../test/component/ui/ImageTest";
// import ProfileCardTest from "./component/sidebar/ProfileCardTest";
// import CategoryTest from "./component/sidebar/CategoryTest";
import BlogPage from "../component/page/BlogPage";
import PostListTest from "./component/content/PostListTest";

function Test(props) {
    return (
        <BrowserRouter>
            {/* <ButtonTest />
            <hr/>
            <ImageTest />
            <hr/>
            <h3>Sidebar TEST</h3>
            <ProfileCardTest />
            <CategoryTest/> */}
            <BlogPage />
            {/* <PostListTest /> */}
        </BrowserRouter>
    );
}

export default Test;