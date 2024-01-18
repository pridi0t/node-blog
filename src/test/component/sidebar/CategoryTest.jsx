import React from "react";
import styled from "styled-components";

import Category from "../../../component/sidebar/Category"
import categoryData from "../../../data/categoryData.json";

const Wrapper = styled.div`
    width: 400px;
    padding: 10px;
    background-color:#064635;
`

function CategoryTest(props) {
    return (
        <>
            <p>Category</p>
            <Wrapper>
                {categoryData.map((item) => {
                    return (
                        <Category
                            key={item.id}
                            name={item.name}
                            children={item.children}
                        />
                    );
                })}
            </Wrapper>
        </>
    );
}

export default CategoryTest;