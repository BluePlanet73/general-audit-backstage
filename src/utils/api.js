import {transformFetch} from './util'

export const DEVELOPER = "Staging";// Staging 测试环境 || Production 正式环境
export const URL = DEVELOPER === "Staging" ? "https://dev-audit.librags.com/admin" : "https://dev-audit.librags.com/admin";
export const PRIVATE_KEY = DEVELOPER === "Staging" ? "https://dev-audit.librags.com/admin" : "https://dev-audit.librags.com/admin";

//login
export function login(code) {
    return transformFetch('POST', "/login", {code});
}
