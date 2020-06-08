import React, {useEffect, useState} from "react";
import {Layout, Menu, Spin} from "antd";
import ProxyMode from "../utils/route";
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
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([]);
  const proxyMode = ProxyMode();
  useEffect(() => {
    setDefaultSelectedKeys(window.location.pathname.split('/').slice(-1));
  }, []);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
      <Menu theme="dark" mode="inline" selectedKeys={defaultSelectedKeys}>
        <Menu.Item key="withdrawAudit" icon={<GroupOutlined/>}
                   onClick={() => {
                     setDefaultSelectedKeys(["withdrawAudit"]);
                     proxyMode.history.push('/home/withdrawAudit');
                   }}>
          提现审核
        </Menu.Item>
        <Menu.Item key="userManagement" icon={<FundProjectionScreenOutlined/>}
                   onClick={() => {
                     setDefaultSelectedKeys(["userManagement"]);
                     proxyMode.history.push('/home/userManagement')
                   }}>
          用户管理
        </Menu.Item>
        <SubMenu key="landmine" icon={<LayoutOutlined/>} title="地雷设置">
          <Menu.Item key="landmineSetting"
                     onClick={() => proxyMode.history.push('/home/landmineSetting')}>地雷设置</Menu.Item>
          <Menu.Item key="landmineNickname"
                     onClick={() => proxyMode.history.push('/home/landmineNickname')}>地雷昵称</Menu.Item>
        </SubMenu>
        <Menu.Item key="pictureDetails" icon={<InsertRowBelowOutlined/>}
                   onClick={() => proxyMode.history.push('/home/pictureDetails')}>
          执行图信息
        </Menu.Item>
        <Menu.Item key="rewardSetting" icon={<CarOutlined/>}
                   onClick={() => proxyMode.history.push('/home/rewardSetting')}>
          奖励设置
        </Menu.Item>
        <SubMenu key="exam" icon={<ReconciliationOutlined/>} title="考试管理">
          <Menu.Item key="examSetting"
                     onClick={() => proxyMode.history.push('/home/examSetting')}>考试设置</Menu.Item>
          <Menu.Item key="examAdd" onClick={() => proxyMode.history.push('/home/examAdd')}>考试添加</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default SidebarComponent;
