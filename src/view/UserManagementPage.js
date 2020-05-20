import React from "react";
import {Input, Button, message} from 'antd';
import RenderSelect from "../component/RenderSelect";
import RenderTable from "../component/RenderTable";
import TableFooter from "../component/TableFooter";
import ProxyMode from "../utils/Route";

class UserManagementPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userNumber: "",//用户账号
            userStatus: undefined,//用户状态
            userStatusList: [],
            operating: undefined,//批量操作
            operatingList: [],
            total: 0,
            loading: false,
            selectedRowKeys: [],
            data: [{
                id: 1,
                name: 1
            }],
            columns: [
                {
                    title: '用户账号',
                    dataIndex: 'name',
                    render: (_, record) => {
                        const proxyMode = ProxyMode();
                        return (
                            <Button onClick={() => {
                                proxyMode.push('/orderDetails')
                            }
                            }>{_}</Button>
                        )
                    }
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
                    title: '用户收益（元）',
                    dataIndex: 'name',
                },
                {
                    title: 'IP地址',
                    dataIndex: 'name',
                },
                {
                    title: '注册时间',
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
                        <div>
                            <Button onClick={() => {
                                message.info('操作');
                                console.log(record);
                            }
                            }>封禁</Button>
                            <Button onClick={() => {
                                message.info('操作');
                                console.log(record);
                            }
                            }>审核</Button>
                            <Button onClick={() => {
                                message.info('操作');
                                console.log(record);
                            }
                            }>恢复</Button>
                            <Button onClick={() => {
                                message.info('操作');
                                console.log(record);
                            }
                            }>解封</Button>
                        </div>
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

    search() {
        message.info('查询');
    }

    reset() {
        message.info('重制');
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
        const {loading, selectedRowKeys, columns, data, userNumber, userStatus, userStatusList, operatingList, operating, total} = this.state;
        return (
            <div>
                <div style={{marginBottom: 16}} className="flex-space-between">
                    <Input placeholder="用户账号" name="userNumber" style={{width: 250}}
                           value={userNumber}
                           onChange={this.handleInput}/>
                    <RenderSelect list={userStatusList} placeholder="用户状态" value={userStatus} name="userStatus"
                                  onChange={this.handleSelect}/>
                    <div>
                        <Button type="primary" style={{marginRight: 15}} onClick={this.search}>查询</Button>
                        <Button onClick={this.reset}>重制</Button>
                    </div>
                </div>
                <TableFooter handleSelect={this.handleSelect} operatingList={operatingList}
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

export default UserManagementPage;
