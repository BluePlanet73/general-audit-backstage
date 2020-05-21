import React, {useEffect} from 'react';
import {Layout} from "antd";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import 'antd/dist/antd.css';
import "../assets/style/style.css";
import SidebarComponent from "../components/SidebarComponent";
import HeaderComponent from "../components/HeaderComponent";
import ContentComponent from "../components/ContentComponent";
import FooterComponent from "../components/FooterComponent";
import LoginPage from "../view/LoginPage";
import {route} from "../utils/route";
import {getRequestParameter} from "../utils/util";
import Loading from "../view/Loading";

export default function Router() {
    const proxyMode = new route();
    useEffect(() => {
        const interval = setInterval(() => {
            !localStorage.getItem("loggedIn") && proxyMode.history.replace('/login');
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    });
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Loading code={getRequestParameter("code")}/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/home">
                    <Layout style={{minHeight: '100vh'}}>
                        <SidebarComponent/>
                        <Layout className="site-layout">
                            <HeaderComponent/>
                            <ContentComponent/>
                            <FooterComponent/>
                        </Layout>
                    </Layout>
                </Route>
                <Route>
                    <Redirect to="/login"/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
