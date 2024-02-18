import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Image from "../ui/Image";
import PostCardList from "../profile/PostCardList";

import postData from "../../data/postData.json"
import userData from "../../data/userData.json";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const WrapperContent = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 814px;
    background: #064635;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 800px;
    min-height: 100%;
`;

const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 97%;
    color: white;
`;

const LeftInfo = styled.div`
    width: 203px;
    font-size: 12px;
    text-align: center;

    & p {
        margin-top: 10px;
    }
`;

const WrapperImage = styled.div`
    overflow: hidden;
    width: 200px;
    height: 180px;
    border-radius: 50%;

    &:hover {
        border: 5px solid white;
    }
`;

const RightInfo = styled.div`
    margin-left: 50px;

    & h1 {
        margin: 10px 0px;
        font-size: 27px;
    }
    & p {
        font-size: 17px;
    }
    & hr {
        margin: 10px 0px;
    }
`;

const Icon = styled.div`
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

const Portfolio = styled.div`
    margin-top: 10px;

    & h1 {
        margin: 10px;
        color: white;
    }
    & hr {
        margin: 10px;
    }
`;

const WrapperCardList = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > div {
        width: 31%;
    }
    & > div:hover {
        opacity: 0.8;
    }
`;

function ProfilePage(props) {
    const navigate = useNavigate();
    const user = userData[0];

    // 임시 데이터 (Post)
    const PER_PAGE = 3;
    const postList = postData.slice(0, PER_PAGE);

    return (
        <Wrapper>
            <WrapperContent>
                <Content>
                    <Info>
                        <LeftInfo>
                            <WrapperImage>
                                <Image
                                    src="/image/default-profile.png"
                                    onClick={() => navigate("/blog")}
                                />
                            </WrapperImage>
                            <p>이미지 클릭시 블로그로 이동합니다</p>
                        </LeftInfo>
                        <RightInfo>
                            <h1>{user.nickname}</h1>
                            <p>{user.introduction}</p>
                            <hr />
                            { user.git && 
                                <Icon>
                                    <Image
                                        src="/image/icon-github.png"
                                        onClick={() => console.log(`${user.git}`)}
                                    />
                                </Icon>
                            }
                            { user.email && 
                                <Icon>
                                    <Image
                                        src="/image/icon-email.png"
                                        onClick={() => console.log(`${user.email}`)}
                                    />
                                </Icon>
                            }
                        </RightInfo>
                    </Info>
                    <Portfolio>
                        <h1>Portfolio</h1>
                        <hr />
                        <WrapperCardList>
                            <PostCardList list={postList} />
                        </WrapperCardList>
                    </Portfolio>
                </Content>
            </WrapperContent>
        </Wrapper>
    );
}

export default ProfilePage;