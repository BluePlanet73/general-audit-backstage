import React from "react";
import {Input, Button, message} from 'antd';
import RenderSelect from "../component/RenderSelect";
import RenderTable from "../component/RenderTable";
import TableFooter from "../component/TableFooter";
import ProxyMode from "../utils/route";
import {enums, postUpdate, readAll} from "../utils/api";

class WithdrawAuditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserStatusApiText: {},//用户状态码表中文
            WithdrawStatusApiText: {},//提现状态码表中文
            userNumber: "",//用户账号
            userStatus: undefined,//用户状态
            userStatusList: [],
            auditStatus: undefined,//审核状态
            auditStatusList: [],
            operating: undefined,//批量操作
            operatingList: [{
                label: "批量通过",
                id: 1
            }],
            total: 0,
            loading: false,
            selectedRowKeys: [],
            data: [],
            columns: [
                {
                    title: '用户账号',
                    dataIndex: 'user_phone',
                },
                {
                    title: '支付宝账号',
                    dataIndex: 'withdraw_account',
                },
                {
                    title: '用户状态',
                    dataIndex: 'user_status_text',
                },
                {
                    title: '提现金额（元）',
                    dataIndex: 'money',
                },
                {
                    title: '审核状态',
                    dataIndex: 'status_text',
                },
                {
                    title: '申请时间',
                    dataIndex: 'created_at',
                },
                {
                    title: '最近操作',
                    dataIndex: 'updated_at',
                },
                {
                    title: '操作',
                    dataIndex: 'withdraw_log_id',
                    render: (_, record) => {
                        const proxyMode = ProxyMode();
                        return (
                            <Button onClick={() => {
                                proxyMode.history.push(`/withdrawAudit/${_}`);
                                //record.status === 1待审核
                            }} disabled={record.status !== 1}>审核</Button>
                        )
                    }
                }
            ]
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.operating = this.operating.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.readList = this.readList.bind(this);
        this.format = this.format.bind(this);
        this.reset = this.reset.bind(this);
        this.passWithdrawLog = this.passWithdrawLog.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        this.enumsList();
    }

    format(array) {
        const {UserStatusApiText, WithdrawStatusApiText} = this.state;
        if (!array || array.length === 0) {
            return [];
        }
        let newArray = [];
        array.forEach(item => {
            item.status_text = WithdrawStatusApiText[item.status];
            newArray.push(Object.assign(item, {
                user_status_text: UserStatusApiText[item.user.status],
                user_status: item.user.status,
                user_phone: item.user.phone
            }))
        });
        return newArray;
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

    passWithdrawLog() {
        message.info('敬请期待');
        // id, object, values
        // const {selectedRowKeys} = this.state;
        // console.log(selectedRowKeys);
        // postUpdateAll()
        //     .then(response => {
        //         console.log(response);
        //         let {error, data, total} = response;
        //         data = this.format(data);
        //         if (error) {
        //
        //         } else {
        //             this.setState({total, data});
        //         }
        //     })
    }

    readList() {
        const {userStatus, auditStatus, userNumber} = this.state;
        let filter = undefined;
        let array = ["AND", []];
        userStatus && array[1].push(["EQ", ["user", "status"], userStatus]);
        userNumber && array[1].push(["EQ", ["user", "phone"], userNumber]);
        auditStatus && array[1].push(["EQ", ["status"], auditStatus]);
        array[1].length && (filter = array);
        readAll("WithdrawLog", [["user", ["phone", "status"]], "withdraw_log_id", "created_at", "updated_at", "user_id", "money", "withdraw_account", "status", "err_code", "remarks", "balance"], 1, 20, filter,)
            .then(response => {
                let {error, data, total} = response;
                data = this.format(data);
                if (error) {

                } else {
                    this.setState({total, data});
                }
            })
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

    enumsList() {
        // enums()
        //     .then(response => {
        //         const {error, data} = response;
        //         if (error) {
        //
        //         } else {
        //             const {UserStatus, WithdrawStatus} = data;
        //             this.setState({
        //                 UserStatusApiText: this.formatEnumsText(UserStatus),
        //                 WithdrawStatusApiText: this.formatEnumsText(WithdrawStatus),
        //                 userStatusList: this.formatEnums(UserStatus),
        //                 auditStatusList: this.formatEnums(WithdrawStatus),
        //             })
        //             this.readList();
        //         }
        //     })
    }

    onChange(e) {
        console.log(e);
    }

    handleSelect(who, value) {
        this.setState({
            [who]: value,
        });
    };

    search() {
        this.readList();
    }

    reset() {
        this.setState({
            userStatus: undefined,
            auditStatus: undefined,
            operating: undefined,
            userNumber: ''
        })
    }

    onSelectChange(selectedRowKeys) {
        this.setState({selectedRowKeys});
    }

    operating() {
        const {operating} = this.state;
        if (operating === 1) {
            this.passWithdrawLog();
        }
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const {loading, selectedRowKeys, columns, data, userNumber, userStatus, userStatusList, auditStatus, auditStatusList, operatingList, operating, total} = this.state;
        return (
            <div>
                <div style={{marginBottom: 16}} className="flex-center-between">
                    <div>
                        <Input placeholder="用户账号" name="userNumber" style={{width: 250, marginRight: 25}}
                               value={userNumber}
                               onChange={this.handleInput}/>
                        <RenderSelect marginRight={25} list={userStatusList} placeholder="用户状态" value={userStatus}
                                      name="userStatus"
                                      onChange={this.handleSelect}/>
                        <RenderSelect list={auditStatusList} placeholder="审核状态" value={auditStatus} name="auditStatus"
                                      onChange={this.handleSelect}/>
                    </div>
                    <div>
                        <Button type="primary" className="margin-right-fifteen" onClick={this.search}>查询</Button>
                        <Button onClick={this.reset}>重制</Button>
                    </div>
                </div>
                <TableFooter handleSelect={this.handleSelect} operatingList={operatingList}
                             operatingClick={this.operating} operating={operating} total={total}/>
                <RenderTable onChange={this.onChange} loading={loading} columns={columns} data={data}
                             id={"withdraw_log_id"}
                             onSelectChange={this.onSelectChange}
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

export default WithdrawAuditPage;
