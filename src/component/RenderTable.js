import React from "react";
import {Button, Table} from "antd";

function RenderTable(props) {
    const {loading, columns, data, selectedRowKeys, id, onSelectChange, footer, onChange} = props;
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <div>
            <div style={{marginBottom: 16}}>
                <Button type="primary" onClick={() => {
                    onSelectChange([]);
                }} disabled={!hasSelected}>
                    清空
                </Button>
                <span style={{marginLeft: 8}}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table onChange={onChange} rowKey={row => row[id]} bordered={true} loading={loading}
                   rowSelection={rowSelection} columns={columns}
                   size="middle"
                   dataSource={data} footer={footer}/>
        </div>
    )
}

export default RenderTable;
