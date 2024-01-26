import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ButtonTest from "../test/component/ui/ButtonTest"
import ImageTest from "../test/component/ui/ImageTest";
import InputTest from "./component/ui/InputTest";
import SelectTest from "./component/ui/SelectTest";
import TextareaTest from "./component/ui/TextareaTest";
import ProfileCardTest from "./component/sidebar/ProfileCardTest";
import CategoryTest from "./component/sidebar/CategoryTest";
import PostListTest from "./component/blog/PostListTest";
import PostCardTest from "./component/profile/PostCardTest";
// import ProfilePage from "../component/page/ProfilePage";
// import BlogPage from "../component/page/BlogPage";

function Test(props) {
    return (
        <BrowserRouter>
            <h2>UI TEST</h2>
            <ButtonTest />
            <hr/>
            <ImageTest />
            <hr/>
            <InputTest />
            <hr />
            <SelectTest />
            <hr />
            <TextareaTest />
            <hr />

            {/* <h3>Sidebar TEST</h3> */}
            <ProfileCardTest />
            <hr />
            <CategoryTest />
            <hr />
            <PostListTest />
            <hr />
            
            <h3>Profile TEST</h3>
            <PostCardTest />
            
            {/* PAGE TEST */}
            {/* <Routes>
                <Route index element={<p>메인화면</p>}/>
                <Route path="/profile" element={<ProfilePage />}/>
                <Route path="/blog/*" element={<BlogPage />}/>
            </Routes> */}
        </BrowserRouter>
    );
}

export default Test;