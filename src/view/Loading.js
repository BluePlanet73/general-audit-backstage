import React, {useEffect} from "react";
import {login} from "../utils/api";
import {Route} from "../utils/Route";

export default function Loading(props) {
    const proxyMode = new Route().history;
    useEffect(() => {
        const {code} = props;
        login(code)
            .then(response => {
                const {error, data} = response;
                error && proxyMode.replace('/login');
                const {access_token, token_type} = data;
                localStorage.setItem("loggedIn", `${token_type} ${access_token}`);
                proxyMode.replace('/home');
            })
            .catch(e => {
                console.log(e);
                proxyMode.replace('/login');
            })
    })
    return <div/>;
}
