import React, {useState} from "react";
import styled from "styled-components";

import PostItemList from "./PostItemList";
import Button from "../ui/Button";

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 30px;
    color: #064635;
`;

const WrapperButton = styled.div`
    margin-top: 20px;
    text-align: right;
`;

function PostListContent(props) {
    const { title, list } = props;

    const PER_PAGE = 5;
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(start + PER_PAGE);
    const [postList, setPostList] = useState(list.slice(start, end));
    
    function subPage() {
        let afterStart = (start - PER_PAGE < 0) ? 0 : (start - PER_PAGE);
        let afterEnd = (end - PER_PAGE < PER_PAGE) ? PER_PAGE : (end - PER_PAGE);
        if (start != afterStart) {
            setStart(afterStart);
            setEnd(afterEnd);
            setPostList(list.slice(afterStart, afterEnd));
        }
    }

    function addPage() {
        let afterStart = (start + PER_PAGE > list.length - PER_PAGE) ? list.length - PER_PAGE : start + PER_PAGE;
        let afterEnd = (end + PER_PAGE > list.length) ? list.length : (end + PER_PAGE);
        if (start != afterStart) {
            setStart(afterStart);
            setEnd(afterEnd)
            setPostList(list.slice(afterStart, afterEnd));
        }
    }

    return (
        <>
            <Title>{title}</Title>
            <PostItemList list={postList}/>
            <WrapperButton>
                <Button
                    name="Previous"
                    onClick={() => { subPage(); }}
                    color="white"
                    background="#064635"
                />
                <Button
                    name="Next"
                    onClick={() => { addPage(); }}
                    color="white"
                    background="#064635"
                />
            </WrapperButton>
        </>
    );
}

export default PostListContent;