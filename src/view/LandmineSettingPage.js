import React from "react";
import {Button, message, Input, Switch} from 'antd';
import x from 'xlsx';
import RenderPictureList from "../component/RenderPictureList";
import TableFooter from "../component/TableFooter";

class LandmineSettingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operating: undefined,//批量操作
            landmineNumberText: "",//地雷数量频率
            pictureNumberText: "",//图片数量频率
            operatingList: [],
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
            }, {
                id: 7,
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                title: "title",
                checked: false,
            }, {
                id: 8,
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                title: "title",
                checked: false,
            }, {
                id: 9,
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                title: "title",
                checked: false,
            }]
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

    save() {
        message.info('save');
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSwitch(checked) {
        console.log(`switch to ${checked}`);
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
        const {selectedRowKeys, landmineNumberText, pictureNumberText, data, operatingList, operating, total} = this.state;
        return (
            <div>
                <div style={{marginBottom: 16}} className="flex">
                    <div>地雷开关</div>
                    <Switch defaultChecked onChange={this.handleSwitch}/>
                    <div>频率设置:每</div>
                    <Input name="pictureNumberText" style={{width: 250}} value={pictureNumberText}
                           onChange={this.handleInput}/>
                    <div>张设置</div>
                    <Input name="landmineNumberText" style={{width: 250}} value={landmineNumberText}
                           onChange={this.handleInput}/>
                    <div>个地雷</div>
                    <Button type="primary" onClick={this.save}>保存</Button>
                </div>
                <div style={{marginBottom: 16}} className="flex-center-between">
                    <Input type="file" name="file" onChange={this.handleUpload} style={{width: 200}}/>
                    <Button type="primary" onClick={this.importFile}>导入</Button>
                </div>
                <TableFooter handleSelect={this.handleSelect} operatingList={operatingList}
                             operatingClick={this.operating} operating={operating} total={total}/>
                <RenderPictureList data={data}
                                   onSelectChange={this.onSelectChange}
                                   selectedRowKeys={selectedRowKeys}
                                   Footer={() => (
                                       <TableFooter handleSelect={this.handleSelect} operatingList={operatingList}
                                                    operatingClick={this.operating} operating={operating}
                                                    total={total}/>
                                   )}/>
            </div>
        );
    }
}

export default LandmineSettingPage;
