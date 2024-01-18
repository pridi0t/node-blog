import React from "react";
import { useNavigate } from "react-router-dom";

import ProfileCard from "../../../component/sidebar/ProfileCard";

const buttonList = [
    {
        name: "Home",
        url: "/home"
    },
    {
        name: "Info",
        url: "/info"
    },
    {
        name: "Logout",
        url: "/logout"
    },
    {
        name: "write new",
        url: "/write-new"
    },
];

function ProfileCardTest(props) {
    const navigate = useNavigate();

    return (
        <>
            <p>ProfileCard</p>
            <ProfileCard
                nickname={`TEST`}
                imageSrc={`/image/defaultProfile.png`}
                imageClick={() => navigate("/profile")}
                buttonList={buttonList}
            />
        </>
    );
}

export default ProfileCardTest;