import React from "react";
import { useNavigate } from "react-router-dom";

import PostCard from "./PostCard";

function PostCardList(props) {
    const navigate = useNavigate();
    const { list } = props;

    return (
        list.map((item) => {
            const { _id, title, content, thumbnail } = item;

            return (
                <PostCard
                    key={_id}
                    title={title}
                    content={content}
                    thumbnail={thumbnail ? thumbnail : `${process.env.PUBLIC_URL}/image/default-postcard-thumbnail.png`}
                    onClick={() => window.open(`${process.env.PUBLIC_URL}/blog/post/${_id}`, "_blank")}
                />
            );
        })
    );
}

export default PostCardList;