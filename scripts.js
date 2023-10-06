// @ts-check

import { state } from "./state.js";

const list = document.querySelector("[data-list]")
const isHtmlElement = list instanceof HTMLElement
if (!isHtmlElement){
    throw new Error (`"data=-list" attribute not found`)}

list.innerHTML=


