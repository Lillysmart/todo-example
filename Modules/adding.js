//@ts-check

/**
 * @typedef {'high' | 'medium' | 'low'} Urgency - The priority that the tasks
 * should take in terms of how quickly it should be completed
 */

import { getHtml } from "./helpers.js";

const createAddingHtml = () => {
  const element = getHtml({ dataAttr: "adding" });

  const button = document.createElement("button");
  button.className = "button";
  button.innerText = "Add Task";

  element.appendChild(button);
  const dialog = document.createElement("dialog");
  dialog.className = "";

  dialog.innerHTML = `<dialog class="overlay" open="open">
<h2 class="overlay__title">Add Task</h2>

<form data-form id="adding">
<label class="overlay__field">
  <div>Title</div>
  <input required class="overlay__input" name="title"/>
</label>

<label class="overlay__field">
  <div>due</div>
  <input type="date" class="overlay__input" name="due"/>
</label>

<label class="overlay__field">
  <div>urgency</div>
  <select required class="overlay__input" name="urgency">
  <option value="medium">Medium</option>
  <option value="high">High</option>
  <option value="low">Low</option>
  

  </select>
</label>
</form>

<div class="overlay__row">
  <button class="button" data-cancel>Cancel</button>
  <button class="button" type="submit" form="adding">Save</button>
</div>
</dialog>
`;
  element.appendChild(dialog);
  return {
    button,
    dialog,
    cancel: dialog.querySelector("[data-cancel]"),
    form: dialog.querySelector("[data-form]"),
  };
};
/**
 * @typedef {object} Data
 * @prop {string } title
 * @prop {Date | null } due
 * @prop {Urgency} urgency
 */

/**
 * @callback Submission
 * @param {Data} data
 */

/**
 *@typedef {object} adding
 @prop {Submission} submission
 * 
 */

 /**
  * 
  * @returns {adding}
  */
export const createAdding = () => {
  const { dialog, button, cancel, form } = createAddingHtml();
  const state = {
    submission : undefined
  };

  button.addEventListener("click", () => {
    dialog.showModal();
  });
  cancel.addEventListener("click", () => {
    dialog.close();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if ( typeof state.submission !== "function"){
      throw new Error ("submission value has to be set a function ")
    }

    if (!(event.target instanceof HTMLFormElement)) {throw new Error ('form not found')

    }
    const entries = new FormData (event.target)
    const response= Object.fromEntries(entries)
    state.submission(response)
event.target.reset()
    dialog.close();
  });
  return {

    get submission (){
return state.submission
    },
    set submission (newValue)
    { state.submission= newValue}
  }
};

export default createAdding;
