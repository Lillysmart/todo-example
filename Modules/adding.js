//@ts-check

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

<label class="overlay__field">
  <div>Title</div>
  <input class="overlay__input" />
</label>

<div class="overlay__row">
  <button class="button" data-cancel>Cancel</button>
  <button class="button" data-save >Save</button>
</div>
</dialog>
`;
  element.appendChild(dialog);
  return {
    button,
    dialog,
    save: dialog.querySelector("[data-save ]"),
    cancel: dialog.querySelector("[data-cancel]"),
  };
};

export const createAdding = () => {
  const { dialog, button, cancel, save } = createAddingHtml();
  button.addEventListener("click", () => {
    dialog.open = true;
  });
};

export default createAdding;
