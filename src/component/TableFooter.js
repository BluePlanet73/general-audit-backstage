import RenderSelect from "./RenderSelect";
import {Button} from "antd";
import React from "react";

function TableFooter(props) {
    const {operatingList, operating, operatingClick, total, handleSelect} = props;
    return (
        <div style={{marginBottom: 16, display: 'flex', alignItems: 'center'}}>
            <RenderSelect list={operatingList} placeholder="批量操作" value={operating} name="operating"
                          onChange={handleSelect}/>
            <Button type="primary" onClick={operatingClick}
                    style={{marginLeft: 15, marginRight: 25}}>提交操作</Button>
            <div>每页展示:</div>
            <Button style={{marginLeft: 15, marginRight: 5}}>50条</Button>
            <Button style={{marginLeft: 5, marginRight: 15}}>200条</Button>
            <div>共 {total} 条数据</div>
        </div>
    )
}

export default TableFooter;
