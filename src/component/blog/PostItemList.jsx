import React from "react";
import { useNavigate } from "react-router-dom";

import PostItem from "./PostItem";

function PostItemList(props) {
    const navigate = useNavigate();
    const { list } = props;
    
    return (
        list.map((item) => {
            const { _id, title, content, thumbnail } = item;
    
            return (
                <PostItem
                    key={_id}
                    title={title}
                    content={content}
                    thumbnail={thumbnail ? thumbnail : `${process.env.PUBLIC_URL}/image/default-post-thumbnail.png`}
                    onClick={() => navigate(`/blog/post/${_id}`)}
                />
            );
        })
    );
}

export default PostItemList;