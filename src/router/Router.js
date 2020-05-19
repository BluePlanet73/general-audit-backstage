import React from 'react';
import {Layout} from "antd";
import {BrowserRouter} from "react-router-dom";
import 'antd/dist/antd.css';
import "../assets/style/style.css";
import SidebarComponent from "../components/SidebarComponent";
import HeaderComponent from "../components/HeaderComponent";
import ContentComponent from "../components/ContentComponent";
import FooterComponent from "../components/FooterComponent";

function Router() {
    return (
        <BrowserRouter>
            <Layout style={{minHeight: '100vh'}}>
                <SidebarComponent/>
                <Layout className="site-layout">
                    <HeaderComponent/>
                    <ContentComponent/>
                    <FooterComponent/>
                </Layout>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;
