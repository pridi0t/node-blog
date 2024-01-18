import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    overflow: hidden;
    width: 340px;
    margin-bottom: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: white;
    & a {
        text-decoration: none;
    }
    & a:visited,
    & a:active {
        color: black;
    }
`;

const WrapperCategory = styled.div`
    display: flex;
`;

const MainCategory = styled.a`
    display: inline-block;
    width: ${(props) => props.displaySub ? "calc(100% - 25px)" : "100%"};
    font-size: 17px;
`;

const CategoryToggle = styled.div`
    border-top: ${(props) => props.displaySub ? "0" : "22px solid #064635"};
    border-right: 12px solid transparent;
    border-bottom: ${(props) => props.displaySub ? "22px solid #064635" : "0"};
    border-left: 12px solid transparent;
`;

const SubCategory = styled.a`
    display: ${(props) => props.displaySub ? "block" : "none"};
    margin-top: 8px;
    font-size: 15px;
    font-weight: 300;
`

function Category(props) {
    const { name, children } = props;
    const [displaySub, setDisplaySub] = useState(false);

    const toggleDisplay = () => {
        setDisplaySub(!displaySub);
    }

    return (
        <Wrapper>
            <WrapperCategory>
                <MainCategory
                    displaySub={displaySub}
                    href={"#"}
                >{name}
                </MainCategory>
                {
                    (children.length > 0) &&
                    <CategoryToggle
                        onClick={toggleDisplay}
                        displaySub={displaySub}
                    />
                }
            </WrapperCategory>
            {
                children.map((item) => {
                    const { name } = item;
                    return (
                        <SubCategory
                            key={item.id}
                            displaySub={displaySub}
                            href={"#"}
                        >{name}</SubCategory>
                    );
                })
            }
        </Wrapper>
    );
}

export default Category;