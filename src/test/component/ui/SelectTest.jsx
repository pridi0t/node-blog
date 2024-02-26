import React, { useState } from "react";

import Select from "../../../component/ui/Select";

const list = [
    {
        "key": "key1",
        "value": "value1"
    },
    {
        "key": "key2",
        "value": "value2"
    },
    {
        "key": "key3",
        "value": "value3"
    },
]

function SelectTest(props) {
    const [ selected, setSelected ] = useState("1");

    return (
        <>
            <h3>Select TEST</h3>
            <Select
                value={selected}
                list={list}
                onChange={(event) => {
                    setSelected(event.target.value);
                    console.log(event.target.value);
                }}
            />
        </>
    );
}

export default SelectTest;