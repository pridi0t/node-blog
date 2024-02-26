import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProfilePage from "./component/page/ProfilePage";
import BlogPage from "./component/page/BlogPage";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route index element={<ProfilePage />} />
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/blog/*" element={<BlogPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
