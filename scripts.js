// @ts-check
console.log('hi')
import { state, Task } from "./Modules/state.js";
import {createTask } from "./Modules/tasks.js";

const task1=createTask({
  title: "Eat breakfast", 
  urgency:'high',
  due :null
})
const Task2 =createTask({
  title: "Write Code", 
  urgency:'high',
  due :new Date (),
})

const Task3=createTask({
  title: "Join a meeting ", 
  urgency:'high',
  due :null
})
console.log(task1.title)
/*
const errorHandler = () => {
  document.body.innerHTML = "Something is terribly wrong";
};
window.addEventListener("error", errorHandler);

  addTaskToHtml();
  
  addTaskToHtml("task")
 updateHtml ("task", { title: "eat Lunch" });
  */