import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    overflow: hidden;
    margin-bottom: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    background: white;
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
    width: ${(props) => props.$displaySub ? "calc(100% - 25px)" : "100%"};
    font-size: 17px;
`;

const CategoryToggle = styled.div`
    border-top: ${(props) => props.$displaySub ? "0" : "22px solid #064635"};
    border-right: 12px solid transparent;
    border-bottom: ${(props) => props.$displaySub ? "22px solid #064635" : "0"};
    border-left: 12px solid transparent;
`;

const SubCategory = styled.a`
    display: ${(props) => props.$displaySub ? "block" : "none"};
    margin-top: 8px;
    font-weight: 300;
    font-size: 15px;
`;

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
                    href={"#"}
                    $displaySub={displaySub}
                >{name}
                </MainCategory>
                {
                    (children.length > 0) &&
                    <CategoryToggle
                        onClick={toggleDisplay}
                        $displaySub={displaySub}
                    />
                }
            </WrapperCategory>
            {
                children.map((item) => {
                    const { name } = item;
                    return (
                        <SubCategory
                            key={item.id}
                            href={"#"}
                            $displaySub={displaySub}
                        >{name}</SubCategory>
                    );
                })
            }
        </Wrapper>
    );
}

export default Category;