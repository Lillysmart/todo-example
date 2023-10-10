// @ts-check
console.log('hi')
import { state, Task } from "./Modules/state.js";
import {createTask } from "./Modules/tasks.js";
import {getHtml  } from "./Modules/helpers.js";

const createAddingHtml =()=>{
const element = getHtml({dataAttr:"adding"})

const button = document.createElement("button");
button.className="button"
button.innerText="Add Task"

element.appendChild(button);
const dialog = document.createElement("dialog")
dialog.innerHTML=`<dialog class="overlay" open="open">
<h2 class="overlay__title">Confirm</h2>
<p class="overlay__message">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quia
  suscipit ea quod quaerat eaque, tempora mollitia soluta porro delectus
  maxime eligendi fugiat minima voluptates. Officiis nesciunt eveniet
  ipsam odit.
</p>
<label class="overlay__field">
  <div>Label</div>
  <input class="overlay__input" />
</label>
<label class="overlay__field">
  <div>Label</div>
  <input class="overlay__input" />
</label>
<div class="overlay__row">
  <button class="button">Cancel</button>
  <button class="button">Delete</button>
</div>
</dialog>-->
`
}

createAddingHtml()

const list =[createTask({
  title: "Eat breakfast", 
  urgency:'high',
  due :null
}),
 createTask({
  title: "Write Code", 
  urgency:'high',
  due :new Date (),
}),

createTask({
  title: "Join a meeting ", 
  urgency:'high',
  due :null
}),

createTask({
  title: "Practice Jvascript ", 
  urgency:'high',
  due :null
}),
]

list[1].completed=true
/*
const errorHandler = () => {
  document.body.innerHTML = "Something is terribly wrong";
};
window.addEventListener("error", errorHandler);

  addTaskToHtml();
  
  addTaskToHtml("task")
 updateHtml ("task", { title: "eat Lunch" });
  */