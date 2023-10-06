// @ts-check

import { state } from "./state.js";

const list = document.querySelector("[data-list]")
const isHtmlElement = list instanceof HTMLElement
if (!isHtmlElement){
    throw new Error (`"data=-list" attribute not found`)}


    const preview =document.querySelector("li")
    preview?.className='task'
    preview.innerHTML=``
list.appendChild


