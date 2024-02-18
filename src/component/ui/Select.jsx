    import React from "react";
    import styled from "styled-components";

    const CustomSelect = styled.select`
        width: 200px;
        height: 20px;
        padding: 0px 5px;
    `;

    function Select(props) {
        const { value, list, onChange } = props;
            
        return (
            <CustomSelect value={value} onChange={onChange}>
            {list.map((item) => {
                return <option key={item.key} value={item.key}>{item.value}</option>;
            })}
            </CustomSelect>
        );
    }

    export default Select;