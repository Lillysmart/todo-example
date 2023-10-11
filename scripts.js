// @ts-check
console.log("hi");
import { state, Task } from "./Modules/state.js";
import { createTask } from "./Modules/tasks.js";
import { createAdding } from "./Modules/adding.js";

const list = [
  createTask({
    title: "Eat breakfast",
    urgency: "high",
    due: null,
  }),
];
const adding = createAdding();

adding.submission = createTask;
