import React, {useEffect} from "react";
import {login} from "../utils/api";
import ProxyMode from "../utils/route";

export default function Loading(props) {
    const proxyMode = ProxyMode();
    useEffect(() => {
        const {code} = props;
        if (localStorage.getItem("loggedIn")) {
            proxyMode.history.replace('/home');
        } else {
            login(code)
                .then(response => {
                    const {error, data} = response;
                    error && proxyMode.history.replace('/login');
                    const {access_token, token_type} = data;
                    localStorage.setItem("loggedIn", `${token_type} ${access_token}`);
                    proxyMode.history.replace('/home');
                })
                .catch(e => {
                    console.log(e);
                    proxyMode.history.replace('/login');
                })
        }
    })
    return <div/>;
}
