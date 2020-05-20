import React from "react";
import {Button, Input, message} from "antd";

class RewardSettingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            withdrawNumber: '',//每日体现次数
            withdrawMinSum: '',//最低提现金额
            probability: '',//红包触发几率
            maxSum: '',//红包每日上限
            beginSum: '',//红包随机开始金额
            endSum: '',//红包随机结束金额
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    save() {
        message.info('save');
    }

    render() {
        const {withdrawNumber, withdrawMinSum, probability, maxSum, beginSum, endSum} = this.state;
        return (
            <div className="flex-column">
                <Input placeholder="每日体现次数" name="withdrawNumber" style={{width: 250, marginBottom: 15}}
                       value={withdrawNumber}
                       onChange={this.handleInput}/>
                <Input placeholder="最低提现金额" name="withdrawMinSum" style={{width: 250, marginBottom: 15}}
                       value={withdrawMinSum}
                       onChange={this.handleInput}/>
                <Input placeholder="红包触发几率" name="probability" style={{width: 250, marginBottom: 15}}
                       value={probability}
                       onChange={this.handleInput}/>
                <div>
                    <Input placeholder="红包随机开始金额" name="beginSum" style={{width: 250, marginRight: 15}}
                           value={beginSum}
                           onChange={this.handleInput}/>
                    <Input placeholder="红包随机结束金额" name="endSum" style={{width: 250}}
                           value={endSum}
                           onChange={this.handleInput}/>
                </div>
                <Input placeholder="红包每日上限" name="maxSum" style={{width: 250, marginTop: 15, marginBottom: 15}}
                       value={maxSum}
                       onChange={this.handleInput}/>
                <Button type="primary" onClick={this.save}>
                    保存
                </Button>
            </div>
        )
    }
}

export default RewardSettingPage;
