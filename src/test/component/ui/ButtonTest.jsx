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
                name="Button"
                onClick={() => console.log("default Button")}
            />
            <Button
                name="Color Change"
                onClick={() => console.log("font color change Button")}
                color="white"
            />
            <Button
                name="Background Change"
                onClick={() => console.log("background change Button")}
                background="pink"
            />
            <Button
                name="Color/Background Change"
                onClick={() => console.log("color, background change Button")}
                color="white"
                background="black"
            />
            <p>ButtonList</p>
            <ButtonList list={buttonList}/>
        </>
    );
}

export default ButtonTest;