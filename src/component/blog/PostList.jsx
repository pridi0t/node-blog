import React from "react";
import { useNavigate } from "react-router-dom";

import PostListItem from "./PostListItem";

function PostList(props) {
    const navigate = useNavigate();
    const { list } = props;
    
    return (
        list.map((item) => {
            const { _id, title, content, thumbnail } = item;
    
            return (
                <PostListItem
                    key={_id}
                    title={title}
                    content={content}
                    thumbnail={thumbnail ? thumbnail : "/image/default-post-thumbnail.png"}
                    onClick={() => navigate(`/blog/post/${_id}`)}
                />
            );
        })
    );
}

export default PostList;