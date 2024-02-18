import React from "react";
import styled from "styled-components";

import Category from "./Category";

const Wrapper = styled.div`
    width: 95%;
    margin-top: 100px;
`;

function CategoryList(props) {
    const { list } = props;

    return (
        <Wrapper>
            {list.map((item) => {
                return (
                    <Category
                        key={item.id}
                        name={item.name}
                        children={item.children}
                    />
                );
            })}
        </Wrapper>
    );
}

export default CategoryList;