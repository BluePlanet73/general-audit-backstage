import React from "react";
import {Breadcrumb} from "antd";
import {useLocation} from "react-router-dom";

function BreadcrumbComponent() {
    let {pathname} = useLocation();
    pathname && (pathname = pathname.substr(1));
    const BREADCRUMB_ITEM = {
        "withdrawAudit": {
            text: "提现审核"
        },
        "userManagement": {
            text: "用户管理"
        },
        "landmineSetting": {
            text: "地雷设置"
        },
        "landmineNickname": {
            text: "地雷昵称"
        },
        "pictureDetails": {
            text: "执行图信息"
        },
        "rewardSetting": {
            text: "奖励设置"
        },
        "examSetting": {
            text: "考试设置"
        },
        "auditUser": {
            text: "审核用户"
        },
        "orderDetails": {
            text: "做单信息"
        },
        "picture": {
            text: "执行图详情"
        },
        "examAdd": {
            text: "考试添加"
        },
    }
    return (
        <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>{BREADCRUMB_ITEM[pathname].text}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbComponent;
