import React, {useState} from "react";
import {Layout, Menu} from "antd";
import ProxyMode from "../utils/Route";
import {
    ReconciliationOutlined,
    CarOutlined,
    InsertRowBelowOutlined,
    GroupOutlined,
    FundProjectionScreenOutlined,
    LayoutOutlined
} from '@ant-design/icons';

function SidebarComponent() {
    const {SubMenu} = Menu;
    const {Sider} = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const proxyMode = ProxyMode();

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
            <div className="logo flex-center">
                <div/>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['withdrawAudit']} mode="inline">
                <Menu.Item key="withdrawAudit" icon={<GroupOutlined/>}
                           onClick={() => proxyMode.push('/withdrawAudit')}>
                    提现审核
                </Menu.Item>
                <Menu.Item key="userManagement" icon={<FundProjectionScreenOutlined/>}
                           onClick={() => proxyMode.push('/userManagement')}>
                    用户管理
                </Menu.Item>
                <SubMenu key="landmine" icon={<LayoutOutlined/>} title="地雷设置">
                    <Menu.Item key="landmineSetting"
                               onClick={() => proxyMode.push('/landmineSetting')}>地雷设置</Menu.Item>
                    <Menu.Item key="landmineNickname"
                               onClick={() => proxyMode.push('/landmineNickname')}>地雷昵称</Menu.Item>
                </SubMenu>
                <Menu.Item key="pictureDetails" icon={<InsertRowBelowOutlined/>}
                           onClick={() => proxyMode.push('/pictureDetails')}>
                    执行图信息
                </Menu.Item>
                <Menu.Item key="rewardSetting" icon={<CarOutlined/>}
                           onClick={() => proxyMode.push('/rewardSetting')}>
                    奖励设置
                </Menu.Item>
                <SubMenu key="exam" icon={<ReconciliationOutlined/>} title="考试管理">
                    <Menu.Item key="examSetting"
                               onClick={() => proxyMode.push('/examSetting')}>考试设置</Menu.Item>
                    <Menu.Item key="examAdd"
                               onClick={() => proxyMode.push('/examAdd')}>考试添加</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default SidebarComponent;
