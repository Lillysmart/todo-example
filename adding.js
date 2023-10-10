//@ts-check

import {getHtml  } from "./Modules/helpers.js";

const createAddingHtml =()=>{
const element = getHtml({dataAttr:"adding"})

const button = document.createElement("button");
button.className="button"
button.innerText="Add Task"

element.appendChild(button);
const dialog = document.createElement("dialog")
dialog.className=''
dialog.open = true
dialog.innerHTML=`<dialog class="overlay" open="open">
<h2 class="overlay__title">Add Task</h2>

<label class="overlay__field">
  <div>Title</div>
  <input class="overlay__input" />
</label>

<div class="overlay__row">
  <button class="button">Cancel</button>
  <button class="button">Delete</button>
</div>
</dialog>
`
element.appendChild(dialog)
}

createAddingHtml()