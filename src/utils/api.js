import {transformFetch} from './util'

export const DEVELOPER = "Staging";// Staging 测试环境 || Production 正式环境
export const URL = DEVELOPER === "Staging" ? "https://dev-audit.librags.com/admin" : "https://dev-audit.librags.com/admin";
export const PRIVATE_KEY = DEVELOPER === "Staging" ? "https://dev-audit.librags.com/admin" : "https://dev-audit.librags.com/admin";

//create
export function create(object, fields, page, size) {
    return transformFetch('POST', 'create', {fields, object, page, size});
}

//read
export function read(id, object, fields, page, size) {
    return transformFetch('POST', `/read/${id}`, {fields, object, page, size});
}

//update
export function postUpdate(id, object, values) {
    return transformFetch('POST', `/update/${id}`, {values, object});
}

//delete
export function postDelete(id, object, fields, page, size) {
    return transformFetch('POST', `/delete/${id}`, {fields, object, page, size});
}

//updateAll
export function postUpdateAll(object, fields, page, size) {
    return transformFetch('POST', 'update', {fields, object, page, size});
}

//readAll
export function readAll(object, fields, page, size, filter) {
    let obj = {fields, object, page, size, filter};
    filter && (obj = Object.assign(obj, {filter}));
    return transformFetch('POST', "/read", obj);
}

//deleteAll
export function postDeleteAll(object, fields, page, size) {
    return transformFetch('POST', 'delete', {fields, object, page, size});
}

//login
export function login(code) {
    return transformFetch('POST', "/login", {code});
}

//enums
export function enums() {
    return transformFetch('GET', "/enums", {});
}
