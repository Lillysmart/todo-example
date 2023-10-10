//@ts-check
import { doesHtmlExist,getHtml} from "./helpers";
import { Task } from "./state";
/**
 *
 * @param {string} id
 */
const addTaskToHtml = (id) => {
  const list = getHtml({ dataAttr:"list"});

  if (doesHtmlExist("task", id)) {
    throw new Error("Task with that Id already exist");
  }

  const preview = document.createElement("li");
  preview.className = "task";
  preview.dataset.task = id;
  preview.innerHTML = /* Html */ ` 
          <label class="task__check">
            <input class="task__input" data-checkbox type="checkbox" disabled/>
          </label>
          <button class="task__title" data-title disabled>
          </button>

          <buttonclass="task__check" data-delete style="display:none"> </button>
          <label class="task__check">
            <svg
              class="task__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
          
            >
              <path
                d="M253 961q-40.212 0-67.606-27.1Q158 906.8 158 867V314h-58v-94h231v-48h297v48h232v94h-58v553q0 39.05-27.769 66.525Q746.463 961 707 961H253Zm454-647H253v553h454V314ZM354 789h77V390h-77v399Zm175 0h78V390h-78v399ZM253 314v553-553Z"
              ></path>
            </svg>
          </label>
      `;
  list.appendChild(preview);
};

/**
 *
 * @param {string} id
 * @param {Partial<Props>} changes
 */

const updateHtml = (id, changes) => {
  const {completed, title}= changes 
  const element = getHtml ({dataAttr:'task', value:id})
  
  const hasCompleted = completed !== undefined
  //const hasDue = due !== undefined
  const hasTitle = title !== undefined
  //const hasUrgency = urgency !== undefined

  if (hasCompleted){
   const inner = getHtml({dataAttr:'checkbox', target:element})
  if (!('checked' in inner)){throw new Error('Expected input element')

  }
   inner.checked = completed
  }

  if(hasTitle){
   const inner = getHtml({dataAttr:'title', target:element})
  inner.innerHTML = title
  }
};




/**
 * 
 * @param {Omit<Props, 'completed'>} props 
 */
export const createTask= (props) => {
  const id = createUniqueId();
  addTaskToHtml(id)

  updateHtml(id, {
    completed:false,
    ...props,
  })
};

export default createTask
