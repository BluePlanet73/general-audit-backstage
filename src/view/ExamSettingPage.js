import React from "react";
import {Input, Button, message} from 'antd';
import RenderSelect from "../component/RenderSelect";
import RenderTable from "../component/RenderTable";
import TableFooter from "../component/TableFooter";

class ExamSettingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operating: undefined,//批量操作
            operatingList: [],
            total: 0,
            loading: false,
            selectedRowKeys: [],
            data: [],
            columns: [
                {
                    title: '用户账号',
                    dataIndex: 'name',
                },
                {
                    title: '支付宝账号',
                    dataIndex: 'name',
                },
                {
                    title: '用户状态',
                    dataIndex: 'name',
                },
                {
                    title: '提现金额（元）',
                    dataIndex: 'name',
                },
                {
                    title: '审核状态',
                    dataIndex: 'name',
                },
                {
                    title: '申请时间',
                    dataIndex: 'name',
                },
                {
                    title: '最近操作',
                    dataIndex: 'name',
                },
                {
                    title: '操作',
                    dataIndex: 'name',
                    render: (_, record) => (
                        <Button onClick={() => {
                            message.info('操作');
                            console.log(record);
                        }
                        }>审核</Button>
                    )
                }
            ]
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.operating = this.operating.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    handleSelect(who, value) {
        this.setState({
            [who]: value,
        });
    };

    add() {
        message.info('查询');
    }

    onSelectChange(selectedRowKeys) {
        this.setState({selectedRowKeys});
    }

    operating() {
        message.info('批量提交操作');
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const {loading, selectedRowKeys, columns, data, operatingList, operating, total} = this.state;
        return (
            <div>
                <TableFooter handleSelect={this.handleSelect} operatingList={operatingList}
                             AddBtn={() => (
                                 <Button type="primary" style={{marginLeft: 15}} onClick={this.add}>添加</Button>
                             )}
                             operatingClick={this.operating} operating={operating} total={total}/>
                <RenderTable loading={loading} columns={columns} data={data} onSelectChange={this.onSelectChange}
                             selectedRowKeys={selectedRowKeys}
                             footer={() => (
                                 <TableFooter handleSelect={this.handleSelect} operatingList={operatingList}
                                              operatingClick={this.operating} operating={operating}
                                              total={total}/>
                             )}/>
            </div>
        );
    }
}

export default ExamSettingPage;
