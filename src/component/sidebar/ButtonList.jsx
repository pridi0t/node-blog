import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

function ButtonList(props) {
    const navigate = useNavigate();
    const { list } = props;

    return (
        list.map((item) => {
            const { name, url } = item;

            return (
                <Button
                    key={name}
                    name={name}
                    onClick={() => {
                        navigate(`${url}`);
                    }}
                />
            );
        })
    );
}

export default ButtonList;