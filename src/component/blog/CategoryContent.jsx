import React from "react";
import { useParams } from "react-router-dom";
import PostListContent from "./PostListContent";

function CategoryContent(props) {
    const { list } = props;
    const { mainCategory, subCategory } = useParams();

    let afterList = list.filter((post) => post.mainCategory === mainCategory);
    let title = mainCategory;

    if (subCategory !== undefined) {
        afterList = afterList.filter((post) => post.subCategory === subCategory);
        title += " - " + subCategory;
    }
    
    return <PostListContent title={`${title}`} list={afterList}/>;
}

export default CategoryContent;