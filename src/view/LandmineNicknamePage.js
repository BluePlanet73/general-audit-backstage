import React from "react";
import {Button, message, Input} from 'antd';
import x from 'xlsx';
import RenderTable from "../component/RenderTable";
import TableFooter from "../component/TableFooter";

class LandmineNicknamePage extends React.Component {
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
                    title: '用户名',
                    dataIndex: 'name',
                },
                {
                    title: '创建时间',
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
                            }>删除</Button>
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

    onSelectChange(selectedRowKeys) {
        this.setState({selectedRowKeys});
    }

    operating() {
        message.info('批量提交操作');
    }

    importFile() {
        message.info('导入');
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleUpload(e) {
        const files = e.target.files;
        const reader = new FileReader();
        try {
            reader.onload = (evt) => {
                const bString = evt.target.result;
                const wb = x.read(bString, {type: 'binary'});
                const data = x.utils.sheet_to_csv(wb.Sheets[wb.SheetNames[0]], {header: 1});
                const array = data.replace(/，/g, ',').split(/[\n\s]/);
                array.shift();
                console.log(array.filter(item => item));
                // const file = array.map((item) => {
                //     const itemArray = item.split(',');
                //     return {
                //         "cdk": itemArray[1],
                //         "valid_day": itemArray[2],
                //     }
                // })
                // this.setState({file});
            };
            reader.readAsBinaryString(files[0]);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const {loading, selectedRowKeys, columns, data, operatingList, operating, total} = this.state;
        return (
            <div>
                <div style={{marginBottom: 16}} className="flex-space-between">
                    <Input type="file" name="file" onChange={this.handleUpload} style={{width: 200}}/>
                    <Button type="primary" onClick={this.importFile}>导入</Button>
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

export default LandmineNicknamePage;
