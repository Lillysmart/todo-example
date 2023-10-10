// @ts-check
import { state, Task } from "./Modules/state.js";
import {addTask } from "./Modules/tasks.js";

addTask({
  title: "eat Lunch", 
  urgency:'high',
  due :null
})

/*
const errorHandler = () => {
  document.body.innerHTML = "Something is terribly wrong";
};
window.addEventListener("error", errorHandler);

  addTaskToHtml();
  
  addTaskToHtml("task")
 updateHtml ("task", { title: "eat Lunch" });
  */