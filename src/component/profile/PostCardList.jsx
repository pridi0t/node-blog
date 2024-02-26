import React from "react";

import PostCard from "./PostCard";

function PostCardList(props) {
    const { list } = props;

    return (
        list.map((item) => {
            const { _id, title, content, thumbnail } = item;

            return (
                <PostCard
                    key={_id}
                    title={title}
                    content={content}
                    thumbnail={thumbnail ? thumbnail : "/image/default-postcard-thumbnail.png"}
                    onClick={() => window.open(`/blog/post/${_id}`, "_blank")}
                />
            );
        })
    );
}

export default PostCardList;