import React from "react";
import {Input, Button, message, DatePicker} from 'antd';
import RenderSelect from "../component/RenderSelect";
import RenderTable from "../component/RenderTable";
import TableFooter from "../component/TableFooter";
import ProxyMode from "../utils/route";

class PictureDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskUrl: "",//任务链接
            cardId: "",//卡盟ID
            admin: "",//审核人
            pictureStatus: undefined,//执行图状态
            pictureStatusList: [],
            taskCategory: undefined,//任务类别
            taskCategoryList: [],
            audit: undefined,//审核结果
            auditList: [],
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
                                proxyMode.push('/pictureDetails/1')
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

    timeChange(e) {
        console.log(e);
    }

    render() {
        const {RangePicker} = DatePicker;
        const {loading, selectedRowKeys, audit, auditList, admin, cardId, columns, data, taskUrl, pictureStatus, pictureStatusList, taskCategory, taskCategoryList, operatingList, operating, total} = this.state;
        return (
            <div>
                <div style={{marginBottom: 16}} className="flex-center-between">
                    <Input placeholder="任务链接" name="taskUrl" style={{width: 250}}
                           value={taskUrl}
                           onChange={this.handleInput}/>
                    <RenderSelect list={pictureStatusList} placeholder="执行图状态" value={pictureStatus}
                                  name="pictureStatus"
                                  onChange={this.handleSelect}/>
                    <RenderSelect list={taskCategoryList} placeholder="任务类别" value={taskCategory} name="taskCategory"
                                  onChange={this.handleSelect}/>
                    <div>
                        <Button type="primary" style={{marginRight: 15}} onClick={this.search}>查询</Button>
                        <Button onClick={this.reset}>重制</Button>
                    </div>
                </div>
                <div style={{marginBottom: 16}} className="flex-center-between">
                    <Input placeholder="卡盟ID" name="cardId" style={{width: 250}}
                           value={cardId}
                           onChange={this.handleInput}/>
                    <Input placeholder="审核人" name="admin" style={{width: 250}}
                           value={admin}
                           onChange={this.handleInput}/>
                    <RenderSelect list={auditList} placeholder="审核结果" value={audit}
                                  name="audit"
                                  onChange={this.handleSelect}/>
                </div>
                <div style={{marginBottom: 16}} className="flex-center-between">
                    <RangePicker showTime onChange={this.timeChange}/>
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

export default PictureDetailsPage;
