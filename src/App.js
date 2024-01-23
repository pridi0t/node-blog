import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BlogPage from "./component/page/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<p>프로필</p>}/>
        <Route path="/blog/*" element={<BlogPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
