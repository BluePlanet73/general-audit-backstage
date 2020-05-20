import React from "react";
import {Layout} from "antd";
import {Redirect, Route, Switch} from "react-router-dom";
import WithdrawAuditPage from "../view/WithdrawAuditPage";
import UserManagementPage from "../view/UserManagementPage";
import LandmineSettingPage from "../view/LandmineSettingPage";
import LandmineNicknamePage from "../view/LandmineNicknamePage";
import PictureDetailsPage from "../view/PictureDetailsPage";
import RewardSettingPage from "../view/RewardSettingPage";
import ExamSettingPage from "../view/ExamSettingPage";
import LoginPage from "../view/LoginPage";
import BreadcrumbComponent from "./BreadcrumbComponent";
import AuditUserPage from "../view/AuditUserPage";
import OrderDetailsPage from "../view/OrderDetailsPage";
import Picture from "../view/Picture";
import ExamAdd from "../view/ExamAdd";

function ContentComponent() {
    const {Content} = Layout;
    return (
        <Content style={{margin: '0 16px'}}>
            <BreadcrumbComponent/>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                <Switch>
                    <Route exact path="/withdrawAudit">
                        <WithdrawAuditPage/>
                    </Route>
                    <Route exact path="/auditUser">
                        <AuditUserPage/>
                    </Route>
                    <Route exact path="/userManagement">
                        <UserManagementPage/>
                    </Route>
                    <Route exact path="/orderDetails">
                        <OrderDetailsPage/>
                    </Route>
                    <Route exact path="/landmineSetting">
                        <LandmineSettingPage/>
                    </Route>
                    <Route exact path="/landmineNickName">
                        <LandmineNicknamePage/>
                    </Route>
                    <Route exact path="/pictureDetails">
                        <PictureDetailsPage/>
                    </Route>
                    <Route exact path="/picture">
                        <Picture/>
                    </Route>
                    <Route exact path="/rewardSetting">
                        <RewardSettingPage/>
                    </Route>
                    <Route exact path="/examSetting">
                        <ExamSettingPage/>
                    </Route>
                    <Route exact path="/examAdd">
                        <ExamAdd/>
                    </Route>
                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                    <Redirect to="/withdrawAudit"/>
                </Switch>
            </div>
        </Content>
    )
}

export default ContentComponent;
