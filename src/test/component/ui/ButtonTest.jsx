import React from "react";
import Button from "../../../component/ui/Button"
import ButtonList from "../../../component/sidebar/ButtonList";

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
            <h3>Button TEST</h3>
            <p>Button</p>
            <Button
                name="TEST Button"
                onClick={() => console.log("TEST Button")}
            />
            <p>ButtonList</p>
            <ButtonList list={buttonList}/>
        </>
    );
}

export default ButtonTest;