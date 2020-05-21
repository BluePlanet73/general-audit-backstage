import React from "react";
import {Breadcrumb} from "antd";
import {useLocation} from "react-router-dom";

export default function BreadcrumbComponent() {
    let {pathname} = useLocation();
    pathname = pathname.split('/').filter(path => path);
    let view = [];
    pathname && pathname.length && pathname.forEach(path => {
        view.push(
            <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>
        )
    });
    return (
        <Breadcrumb style={{margin: '16px 0'}}>
            {view}
        </Breadcrumb>
    );
}
