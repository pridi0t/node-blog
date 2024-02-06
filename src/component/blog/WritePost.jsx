import React, { useState } from "react";
import styled from "styled-components";

import Input from "../ui/Input";
import Select from "../ui/Select";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

const Title = styled.h1`
    font-size: 30px;
    color: #064635;
`;

const PostInfo = styled.div`
    margin: 20px 0px;
`;

const WrapperInfo = styled.div`
    display: flex;
    margin: 10px 0px;
`;

const Info = styled.div`
    display: inline-block;
    width: 140px;
    color: white;
    background: #064635;
    text-align: center;
`;

const WrapperButton = styled.div`
    text-align: end;

    & button {
        margin-right: 0px;
    }
`;

const category = [
    {
        "key": "1",
        "value": "category1"
    },
    {
        "key": "2",
        "value": "category2"
    },
    {
        "key": "3",
        "value": "category3"
    },
]

function WritePost(props) {
    const [ title, setTitle ] = useState("title");
    const [ mainCategory, setMainCategory ] = useState("1");
    const [ subCategory, setSubCategory ] = useState("1");
    const [ text, setText ] = useState("");
    
    return (
        <>
            <Title>{`Write a new Post`}</Title>
            <PostInfo>
                <WrapperInfo>
                    <Info>Title</Info>
                    <Input
                        type="text"
                        placeholder="title"
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </WrapperInfo>
                <WrapperInfo>
                    <Info>Main Category</Info>
                    <Select
                        value={mainCategory}
                        list={category}
                        onChange={(event) => setMainCategory(event.target.value)}
                    />
                </WrapperInfo>
                <WrapperInfo>
                    <Info>Sub Category</Info>
                    <Select
                        value={subCategory}
                        list={category}
                        onChange={(event) => setSubCategory(event.target.value)}
                    />
                </WrapperInfo>
            </PostInfo>
            <Textarea
                text={text}
                onChange={(event) => setText(event.target.value)}
            />
            <WrapperButton>
                <Button
                    name="Submit"
                    onClick={() => console.log(`title : ${title}\nmainCategory : ${mainCategory}\nsubCategory : ${subCategory}\ntext: ${text}`)}    
                />
            </WrapperButton>
        </>
    );
}

export default WritePost;