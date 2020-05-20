import React from "react";
import {Button, Input, message, Pagination} from "antd";
import x from "xlsx";
import RenderPictureList from "../component/RenderPictureList";

class ExamAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            selectedRowKeys: [],
            data: [{
                id: 1,
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                title: "title",
                checked: false,
            }, {
                id: 2,
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                title: "title",
                checked: false,
            }, {
                id: 3,
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                title: "title",
                checked: false,
            }, {
                id: 4,
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                title: "title",
                checked: false,
            }, {
                id: 5,
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                title: "title",
                checked: false,
            }, {
                id: 6,
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                title: "title",
                checked: false,
            }]
        }
        this.handleInput = this.handleInput.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
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

    importFile() {
        message.info('导入');
    }

    save() {
        message.info('save');
    }

    onSelectChange(selectedRowKeys) {
        this.setState({selectedRowKeys});
    }

    render() {
        const {selectedRowKeys, data, total} = this.state;
        return (
            <div>
                <div style={{marginBottom: 16}} className="flex-space-between">
                    <Input type="file" name="file" onChange={this.handleUpload} style={{width: 200}}/>
                    <Button type="primary" onClick={this.importFile}>导入</Button>
                    <Button type="primary" onClick={this.save}>保存</Button>
                </div>
                <RenderPictureList data={data}
                                   onSelectChange={this.onSelectChange}
                                   selectedRowKeys={selectedRowKeys}
                                   Footer={() => (
                                       <div className="flex-center-end">
                                           <Pagination
                                               total={total}
                                               showSizeChanger
                                               showQuickJumper
                                               onChange={(page, pageSize) => {
                                                   console.log(page)
                                                   console.log(pageSize)
                                               }}
                                           />
                                       </div>
                                   )}/>
            </div>
        );
    }
}

export default ExamAdd;
