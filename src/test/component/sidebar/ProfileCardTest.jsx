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
            <h3>ProfileCard TEST</h3>
            <ProfileCard
                nickname={`TEST`}
                imageSrc={`/image/default-profile.png`}
                imageClick={() => navigate("/profile")}
                buttonList={buttonList}
            />
        </>
    );
}

export default ProfileCardTest;