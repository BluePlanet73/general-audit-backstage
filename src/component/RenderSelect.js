import React from "react";
import {Select} from "antd";

function RenderSelect(props) {
    const {list, name, value, placeholder, onChange, marginRight} = props;
    if (list && list.length > 0) {
        let array = [];
        list.forEach(select => {
            array.push(
                <Select.Option key={select.id} value={select.id}>{select.label}</Select.Option>
            );
        })
        return (
            <Select style={{width: 120, marginRight: marginRight || 0}} placeholder={placeholder} value={value}
                    onChange={(value) => {
                        onChange(name, value);
                    }}>
                {array}
            </Select>
        );
    }
    return (
        <Select style={{width: 120, marginRight: marginRight || 0}} placeholder={placeholder} value={value}
                onChange={(value) => {
                    onChange(name, value);
                }}/>
    );
}

export default RenderSelect;
