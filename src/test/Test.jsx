import React from "react";
import { BrowserRouter } from "react-router-dom";

// import ButtonTest from "../test/component/ui/ButtonTest"
// import ImageTest from "../test/component/ui/ImageTest";
// import ProfileCardTest from "./component/sidebar/ProfileCardTest";
// import CategoryTest from "./component/sidebar/CategoryTest";
// import PostListTest from "./component/content/PostListTest";
import BlogPage from "../component/page/BlogPage";

function Test(props) {
    return (
        <BrowserRouter>
            {/* <ButtonTest />
            <hr/>
            <ImageTest />
            <hr/>
            <h3>Sidebar TEST</h3>
            <ProfileCardTest />
            <CategoryTest/>
            <PostListTest /> */}
            <BlogPage />
        </BrowserRouter>
    );
}

export default Test;