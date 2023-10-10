// @ts-check
console.log('hi')
import { state, Task } from "./Modules/state.js";
import {createTask } from "./Modules/tasks.js";
import { createAdding } from "./Modules/adding.js";
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