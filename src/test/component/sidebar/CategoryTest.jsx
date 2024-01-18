import React from "react";

import Category from "../../../component/sidebar/Category"
import categoryData from "../../../data/categoryData.json";

function CategoryTest(props) {
    return (
        <>
            <p>Category</p>
            {categoryData.map((item) => {
                return (
                    <Category
                        key={item.id}
                        name={item.name}
                        children={item.children}
                    />
                );
            })}
        </>
    );
}

export default CategoryTest;