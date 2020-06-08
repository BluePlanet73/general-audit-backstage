import React, {useEffect} from "react";
import {login} from "../utils/api";
import ProxyMode from "../utils/route";

export default function Loading(props) {
  const proxyMode = ProxyMode();
  useEffect(() => {
    const {code} = props;
    if (localStorage.getItem("loggedIn")) {
      proxyMode.replace('/home');
    } else if (code) {
      login(code)
        .then(response => {
          const {error, data} = response;
          error && proxyMode.replace('/login');
          const {access_token, token_type} = data;
          localStorage.setItem("loggedIn", `${token_type.charAt(0).toUpperCase()}${token_type.slice(1)} ${access_token}`);
          proxyMode.replace('/home');
        })
        .catch(e => {
          console.log(e);
          proxyMode.replace('/login');
        })
    } else {
      proxyMode.replace('/login');
    }
  })
  return <div/>;
}
