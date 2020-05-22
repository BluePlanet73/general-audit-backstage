import React from "react";
import {Input, Button, message} from 'antd';
import RenderSelect from "../component/RenderSelect";
import RenderTable from "../component/RenderTable";
import TableFooter from "../component/TableFooter";
import ProxyMode from "../utils/route";
import {enums, readAll} from "../utils/api";

class UserManagementPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userNumber: "",//用户账号
            UserStatusApiText: {},//用户状态码表中文
            userStatus: undefined,//用户状态
            userStatusList: [],
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
                    render: (_, record) => {
                        const proxyMode = ProxyMode();
                        return (
                            <Button onClick={() => {
                                proxyMode.push('/userManagement/1', {a: 1111})
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
        this.readList = this.readList.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    componentDidMount() {
        this.enumsList();
    }

    formatEnumsText(array) {
        if (!array || !array.length) {
            return {}
        }
        let obj = {};
        array.forEach(item => {
            try {
                obj[item[0]] = item[1];
            } catch (e) {
                console.log(e);
            }
        });
        return obj;
    }

    formatEnums(array) {
        if (!array || !array.length) {
            return {}
        }
        let newArray = [];
        array.forEach(item => {
            try {
                newArray.push({
                    id: item[0],
                    label: item[1]
                })
            } catch (e) {
                console.log(e);
            }
        });
        return newArray;
    }

    readList() {
        const {userStatus, userNumber} = this.state;
        let filter = undefined;
        let array = ["AND", []];
        userStatus && array[1].push(["EQ", ["user", "status"], userStatus]);
        userNumber && array[1].push(["EQ", ["user", "phone"], userNumber]);
        array[1].length && (filter = array);
        readAll("User", [["app", ["phone", "status"]], "user_id", "app", "phone", "avatar", "password", "nickname", "balance", "passed", "status", "remarks"], 1, 20, filter,)
            .then(response => {
                let {error, data, total} = response;
                data = this.format(data);
                if (error) {

                } else {
                    this.setState({total, data});
                }
            })
    }

    enumsList() {
        enums()
            .then(response => {
                const {error, data} = response;
                if (error) {

                } else {
                    const {UserStatus} = data;
                    this.setState({
                        UserStatusApiText: this.formatEnumsText(UserStatus),
                        userStatusList: this.formatEnums(UserStatus),
                    })
                    this.readList();
                }
            })
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
                <div style={{marginBottom: 16}} className="flex-center-between">
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
