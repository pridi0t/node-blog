import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Image from "../ui/Image";
import ButtonList from "./ButtonList";

const Wrapper = styled.div`
    display: flex;
    width: 370px;
    height: 111px;
    background: #F4EEA9;
    align-items: center;
    justify-content: center;
`;

const ProfileCardImage = styled.div`
    overflow: hidden;
    width: 60px;
    height: 60px;
    border: 1px solid black;
    border-radius: 15px;
`;

const Content = styled.div`
    height: 60px;
    margin-left: 10px;
`;

const UserId = styled.h3`
    margin: 0px 0px 5px 0px;
    font-size: 20px;
`;

const buttonList = [
    {
        name: "Home",
        url: "/blog"
    },
    {
        name: "Info",
        url: "#"
    },
    {
        name: "Logout",
        url: "#"
    },
    {
        name: "write new",
        url: "/blog/post"
    },
];

function ProfileCard(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <ProfileCardImage>
                <Image
                    src={`/image/blog1.png`}
                    onClick={() => navigate("/profile")}
                />
            </ProfileCardImage>
            <Content>
                <div>
                    <UserId>USERID</UserId>
                    <ButtonList list={buttonList}/>
                </div>
            </Content>
        </Wrapper>
    );
}

export default ProfileCard;