let box_el = document.querySelectorAll<HTMLElement>(".box");

let add_task_btn = document.querySelector("#add_task") as HTMLButtonElement;

let taskbox_div = document.querySelector(".taskbox") as HTMLDivElement;

add_task_btn.addEventListener("click", () => {
    let one_task = document.createElement("div");
    one_task.classList.add("flex");

    let label = document.createElement("label");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("tasks", "m-2", "w-5", "h-5","accent-slate-500"); 

    // let delicon = document.createElement("i");
    // delicon.classList.add("fa-solid", "fa-trash-can");
    
    let taskx = document.createElement("input");
    taskx.type = "text";
    taskx.placeholder = "New Task";
    taskx.classList.add("bg-transparent", "outline-none", "border-white", "text-black", "task-bg");

    taskbox_div.prepend(taskx);

    label.append(checkbox, taskx);
    one_task.append(label);
    // one_task.append(label, delicon);
    taskbox_div.prepend(one_task);

    const confirmTask = () => {
        taskx.replaceWith(taskx.value);
        checkbox.addEventListener("change", () => {
            // let label = checkbox.parentElement;
            let parentdiv = one_task?.parentElement;
            if(checkbox.checked){
                if(one_task){
                    // label?.classList.add("line-through", "opacity-50");
                    one_task.style.textDecoration = "line-through";
                    one_task.style.opacity = "0.5";
                    parentdiv?.append(one_task);
                }
            } else {
                // label?.classList.remove("line-through", "opacity-50");
                if(one_task){
                    one_task.style.textDecoration = "";
                    one_task.style.opacity = "";
                    if(parentdiv){
                        parentdiv?.insertBefore(one_task, parentdiv.firstChild);
                    }
                }
            }
        });
    }
    
    taskx.addEventListener("keydown", (e) => {
        if(e.key === "Enter"){
            confirmTask();
        }
    });

    taskx.addEventListener("blur", () => {
        confirmTask();
    });    

    // dblclick - edit
    // taskx.addEventListener("dblclick", () => {

    // })
});