import React from "react";
import {Button, Pagination, message} from 'antd';
import RenderPictureList from "../component/RenderPictureList";

class Picture extends React.Component {
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
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInput = this.handleInput.bind(this);
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

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const {selectedRowKeys, data, total} = this.state;
        return (
            <div>
                <div style={{marginBottom: 16}} className="flex-space-between">
                    <div>任务链接: {123564646}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共 {total} 条数据</div>
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

export default Picture;
