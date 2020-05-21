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
import BreadcrumbComponent from "./BreadcrumbComponent";
import AuditUserPage from "../view/AuditUserPage";
import OrderDetailsPage from "../view/OrderDetailsPage";
import Picture from "../view/Picture";
import ExamAdd from "../view/ExamAdd";

export default function ContentComponent() {
    const {Content} = Layout;
    return (
        <Content style={{margin: '0 16px'}}>
            <BreadcrumbComponent/>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                <Switch>
                    <Route exact path="/home/withdrawAudit">
                        <WithdrawAuditPage/>
                    </Route>
                    <Route exact path="/home/userManagement">
                        <UserManagementPage/>
                    </Route>
                    <Route exact path="/home/landmineSetting">
                        <LandmineSettingPage/>
                    </Route>
                    <Route exact path="/home/landmineNickName">
                        <LandmineNicknamePage/>
                    </Route>
                    <Route exact path="/home/pictureDetails">
                        <PictureDetailsPage/>
                    </Route>
                    <Route exact path="/home/rewardSetting">
                        <RewardSettingPage/>
                    </Route>
                    <Route exact path="/home/examSetting">
                        <ExamSettingPage/>
                    </Route>
                    <Route exact path="/home/examAdd">
                        <ExamAdd/>
                    </Route>
                    <Route exact path="/home/withdrawAudit/:id">
                        <AuditUserPage/>
                    </Route>
                    <Route exact path="/home/userManagement/:id">
                        <OrderDetailsPage/>
                    </Route>
                    <Route exact path="/home/pictureDetails/:id">
                        <Picture/>
                    </Route>
                    <Route>
                        <Redirect to="/home/withdrawAudit"/>
                    </Route>
                </Switch>
            </div>
        </Content>
    )
}
