import React, { useState } from "react";

import TextArea from "../../../component/ui/Textarea";

function TextareaTest(props) {
    const [ text, setText ] = useState("");

    return (
        <TextArea
            text={text}
            onChange={(event) => {
                setText(event.target.value);
                console.log(event.target.value);
            }}
        />
    );
}

export default TextareaTest;