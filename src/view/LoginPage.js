import React, {useEffect} from "react";

export default function LoginPage() {
    useEffect(() => {
        window.location.href = "https://open.work.weixin.qq.com/wwopen/sso/qrConnect?appid=ww06965c1768646c7f&agentid=1000017&redirect_uri=http://127.0.0.1:3000&state=STATE";
    });
    return <div/>
}
