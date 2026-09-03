const TASKS_KEY = "studypilot_tasks";

const taskModal = document.getElementById("taskModal");
const taskForm = document.getElementById("taskForm");

const addTaskBtn = document.getElementById("addTaskBtn");
const addFirstTaskBtn = document.getElementById("addFirstTaskBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelModalBtn = document.getElementById("cancelModalBtn");

const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");

const taskDate = document.getElementById("taskDate");
const taskFilter = document.getElementById("taskFilter");

const taskId = document.getElementById("taskId");
const taskTitle = document.getElementById("taskTitle");
const taskSubject = document.getElementById("taskSubject");
const taskPriority = document.getElementById("taskPriority");
const taskDueDate = document.getElementById("taskDueDate");
const taskTime = document.getElementById("taskTime");
const taskDuration = document.getElementById("taskDuration");
const taskDescription = document.getElementById("taskDescription");

const modalTitle = document.getElementById("modalTitle");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");
const highPriorityTasks = document.getElementById("highPriorityTasks");

const visibleTaskCount = document.getElementById("visibleTaskCount");
const taskListTitle = document.getElementById("taskListTitle");
const headerDate = document.getElementById("headerDate");


/* =========================================
   DATE
========================================= */

function getToday() {

    const now = new Date();

    const year = now.getFullYear();

    const month = String(
        now.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        now.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function displayDate(date) {

    if (!date) return "";

    const d = new Date(
        date + "T00:00:00"
    );

    return d.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );
}


/* =========================================
   LOCAL STORAGE
========================================= */

function getTasks() {

    const data =
        localStorage.getItem(TASKS_KEY);

    if (!data) {
        return [];
    }

    try {

        return JSON.parse(data);

    } catch (error) {

        console.error(
            "Task data error:",
            error
        );

        return [];
    }
}


function saveTasks(tasks) {

    localStorage.setItem(
        TASKS_KEY,
        JSON.stringify(tasks)
    );

    console.log(
        "TASK SAVED:",
        tasks
    );
}


/* =========================================
   OPEN MODAL
========================================= */

function openModal() {

    taskForm.reset();

    taskId.value = "";

    modalTitle.textContent =
        "Add New Task";

    taskDueDate.value =
        taskDate.value || getToday();

    taskPriority.value =
        "medium";

    taskDuration.value =
        "1 hour";

    taskModal.hidden = false;

    document.body.style.overflow =
        "hidden";

    setTimeout(() => {

        taskTitle.focus();

    }, 100);

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    taskModal.hidden = true;

    document.body.style.overflow =
        "";

    taskForm.reset();

    taskId.value = "";

    modalTitle.textContent =
        "Add New Task";
}


/* =========================================
   SAVE TASK
========================================= */

taskForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        console.log(
            "SAVE BUTTON CLICKED"
        );


        const title =
            taskTitle.value.trim();

        const subject =
            taskSubject.value.trim();

        const priority =
            taskPriority.value;

        const date =
            taskDueDate.value;

        const time =
            taskTime.value;

        const duration =
            taskDuration.value;

        const description =
            taskDescription.value.trim();


        /* VALIDATION */

        if (title === "") {

            alert(
                "Please enter the task title."
            );

            taskTitle.focus();

            return;
        }


        if (date === "") {

            alert(
                "Please select a date."
            );

            taskDueDate.focus();

            return;
        }


        let tasks =
            getTasks();


        /* =================================
           EDIT EXISTING TASK
        ================================= */

        if (taskId.value !== "") {

            const index =
                tasks.findIndex(
                    task =>
                        task.id ===
                        taskId.value
                );


            if (index !== -1) {

                tasks[index].title =
                    title;

                tasks[index].subject =
                    subject;

                tasks[index].priority =
                    priority;

                tasks[index].date =
                    date;

                tasks[index].time =
                    time;

                tasks[index].duration =
                    duration;

                tasks[index].description =
                    description;

            }

        }


        /* =================================
           CREATE NEW TASK
        ================================= */

        else {

            const newTask = {

                id:
                    Date.now().toString(),

                title:
                    title,

                subject:
                    subject,

                priority:
                    priority,

                date:
                    date,

                time:
                    time,

                duration:
                    duration,

                description:
                    description,

                completed:
                    false

            };


            tasks.push(newTask);

        }


        /* SAVE */

        saveTasks(tasks);


        /* CLOSE */

        closeModal();


        /* REFRESH */

        renderTasks();


        alert(
            "Task saved successfully!"
        );

    }
);


/* =========================================
   RENDER
========================================= */

function renderTasks() {

    const tasks =
        getTasks();

    const selectedDate =
        taskDate.value;

    const filter =
        taskFilter.value;


    let visible =
        tasks.filter(
            task =>
                task.date ===
                selectedDate
        );


    if (filter === "pending") {

        visible =
            visible.filter(
                task =>
                    !task.completed
            );

    }


    if (filter === "completed") {

        visible =
            visible.filter(
                task =>
                    task.completed
            );

    }


    /* SORT */

    visible.sort(
        (a, b) => {

            if (
                a.completed !==
                b.completed
            ) {

                return a.completed
                    ? 1
                    : -1;
            }

            return (
                (a.time || "99:99")
                .localeCompare(
                    b.time || "99:99"
                )
            );

        }
    );


    /* TITLE */

    if (
        selectedDate ===
        getToday()
    ) {

        taskListTitle.textContent =
            "Today's Tasks";

    } else {

        taskListTitle.textContent =
            displayDate(selectedDate);

    }


    /* COUNT */

    visibleTaskCount.textContent =
        `${visible.length} ${
            visible.length === 1
                ? "task"
                : "tasks"
        }`;


    /* CLEAR */

    taskList.innerHTML = "";


    /* EMPTY */

    if (visible.length === 0) {

        emptyState.style.display =
            "flex";

    } else {

        emptyState.style.display =
            "none";
    }


    /* CREATE */

    visible.forEach(
        task => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "planner-task";


            if (task.completed) {

                item.classList.add(
                    "completed"
                );

            }


            item.innerHTML = `

                <button
                    type="button"
                    class="task-checkbox"
                    data-action="complete"
                    data-id="${task.id}">

                    ${task.completed ? "✓" : ""}

                </button>


                <div class="planner-task-content">

                    <div class="planner-task-title">
                        ${escapeHTML(task.title)}
                    </div>


                    <div class="planner-task-meta">

                        ${
                            task.subject
                            ?
                            `<span class="task-subject">
                                ${escapeHTML(task.subject)}
                            </span>`
                            :
                            ""
                        }


                        ${
                            task.time
                            ?
                            `<span class="task-time">
                                ◷ ${escapeHTML(task.time)}
                            </span>`
                            :
                            ""
                        }


                        <span class="task-duration">
                            ◴ ${escapeHTML(task.duration)}
                        </span>

                    </div>


                    ${
                        task.description
                        ?
                        `<div class="task-description">
                            ${escapeHTML(task.description)}
                        </div>`
                        :
                        ""
                    }

                </div>


                <span class="
                    priority-badge
                    priority-${task.priority}
                ">

                    ${escapeHTML(task.priority)}

                </span>


                <div class="task-actions">

                    <button
                        type="button"
                        class="task-action"
                        data-action="edit"
                        data-id="${task.id}">

                        ✎

                    </button>


                    <button
                        type="button"
                        class="task-action delete"
                        data-action="delete"
                        data-id="${task.id}">

                        ×

                    </button>

                </div>

            `;


            taskList.appendChild(item);

        }
    );


    updateStats(tasks);
}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(text) {

    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =========================================
   STATISTICS
========================================= */

function updateStats(tasks) {

    const total =
        tasks.length;

    const completed =
        tasks.filter(
            task =>
                task.completed
        ).length;

    const pending =
        total - completed;

    const high =
        tasks.filter(
            task =>
                task.priority === "high"
                &&
                !task.completed
        ).length;


    totalTasks.textContent =
        total;

    completedTasks.textContent =
        completed;

    pendingTasks.textContent =
        pending;

    highPriorityTasks.textContent =
        high;
}


/* =========================================
   TASK ACTIONS
========================================= */

taskList.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                "[data-action]"
            );


        if (!button) return;


        const id =
            button.dataset.id;

        const action =
            button.dataset.action;


        /* COMPLETE */

        if (
            action === "complete"
        ) {

            const tasks =
                getTasks();

            const task =
                tasks.find(
                    item =>
                        item.id === id
                );

            if (task) {

                task.completed =
                    !task.completed;

                saveTasks(tasks);

                renderTasks();

            }

        }


        /* EDIT */

        if (
            action === "edit"
        ) {

            const tasks =
                getTasks();

            const task =
                tasks.find(
                    item =>
                        item.id === id
                );

            if (!task) return;


            taskId.value =
                task.id;

            taskTitle.value =
                task.title;

            taskSubject.value =
                task.subject || "";

            taskPriority.value =
                task.priority || "medium";

            taskDueDate.value =
                task.date;

            taskTime.value =
                task.time || "";

            taskDuration.value =
                task.duration || "1 hour";

            taskDescription.value =
                task.description || "";


            modalTitle.textContent =
                "Edit Task";


            taskModal.hidden =
                false;

            document.body.style.overflow =
                "hidden";

            taskTitle.focus();

        }


        /* DELETE */

        if (
            action === "delete"
        ) {

            const confirmed =
                confirm(
                    "Delete this task?"
                );

            if (!confirmed) return;


            let tasks =
                getTasks();

            tasks =
                tasks.filter(
                    task =>
                        task.id !== id
                );


            saveTasks(tasks);

            renderTasks();

        }

    }
);


/* =========================================
   BUTTONS
========================================= */

addTaskBtn.addEventListener(
    "click",
    openModal
);


addFirstTaskBtn.addEventListener(
    "click",
    openModal
);


closeModalBtn.addEventListener(
    "click",
    closeModal
);


cancelModalBtn.addEventListener(
    "click",
    closeModal
);


/* =========================================
   DATE / FILTER
========================================= */

taskDate.addEventListener(
    "change",
    renderTasks
);


taskFilter.addEventListener(
    "change",
    renderTasks
);


/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

taskModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            taskModal
        ) {

            closeModal();

        }

    }
);


/* =========================================
   ESCAPE
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
            &&
            !taskModal.hidden
        ) {

            closeModal();

        }

    }
);


/* =========================================
   HEADER DATE
========================================= */

headerDate.textContent =
    new Date().toLocaleDateString(
        "en-IN",
        {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );


/* =========================================
   INITIAL DATE
========================================= */

taskDate.value =
    getToday();


/* =========================================
   START
========================================= */

renderTasks();

console.log(
    "StudyPilot Planner loaded successfully."
);