import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ButtonTest from "../test/component/ui/ButtonTest"
// import ImageTest from "../test/component/ui/ImageTest";
// import InputTest from "./component/ui/InputTest";
// import SelectTest from "./component/ui/SelectTest";
// import TextareaTest from "./component/ui/TextareaTest";
// import ProfileCardTest from "./component/sidebar/ProfileCardTest";
// import CategoryTest from "./component/sidebar/CategoryTest";
// import PostListTest from "./component/content/PostListTest";
import BlogPage from "../component/page/BlogPage";

function Test(props) {
    return (
        <BrowserRouter>
            {/* UI TEST */}
            {/* <ButtonTest />
            <hr/>
            <ImageTest />
            <hr/>
            <InputTest />
            <hr />
            <SelectTest />
            <hr />
            <TextareaTest /> */}

            {/* <h3>Sidebar TEST</h3> */}
            {/* <ProfileCardTest />
            <CategoryTest/>
            <PostListTest /> */}

            {/* PAGE TEST */}
            <Routes>
                <Route index element={<p>메인화면</p>}/>
                <Route path="/profile" element={<p>프로필화면</p>}/>
                <Route path="/blog/*" element={<BlogPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Test;