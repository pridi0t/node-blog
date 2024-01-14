import React from "react";
import Button from "../../component/ui/Button"
import ButtonList from "../../component/sidebar/ButtonList";

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

function ButtonTest(props) {
    return (
        <>
            <p>Button TEST</p>
            <Button
                name="TEST Button"
                onClick={() => console.log("TEST Button")}
            />
            <hr />
            <p>ButtonList TEST</p>
            <ButtonList list={buttonList}/>
        </>
    );
}

export default ButtonTest;