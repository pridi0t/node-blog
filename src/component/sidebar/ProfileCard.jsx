import React from "react";
import styled from "styled-components";

import Image from "../ui/Image";
import ButtonList from "./ButtonList";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 111px;
    background: #F4EEA9;
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

function ProfileCard(props) {
    const { nickname, imageSrc, imageClick, buttonList } = props;

    return (
        <Wrapper>
            <ProfileCardImage>
                <Image
                    src={imageSrc}
                    onClick={imageClick}
                />
            </ProfileCardImage>
            <Content>
                <div>
                    <UserId>{nickname}</UserId>
                    <ButtonList list={buttonList}/>
                </div>
            </Content>
        </Wrapper>
    );
}

export default ProfileCard;