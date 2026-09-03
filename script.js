// =========================================
// STUDYPILOT - DASHBOARD
// =========================================


// =========================================
// OPEN PAGE
// =========================================

function openPage(page) {

    window.location.href = "./" + page;

}


// =========================================
// GET TASKS
// =========================================

function getTasks() {

    try {

        return JSON.parse(
            localStorage.getItem("studyPilotTasks")
        ) || [];

    }

    catch (error) {

        console.error(
            "Could not read tasks:",
            error
        );

        return [];

    }

}


// =========================================
// UPDATE DASHBOARD
// =========================================

function updateDashboard() {

    const tasks = getTasks();


    const subjectElement =
        document.getElementById("subjectCount");

    const completedElement =
        document.getElementById("completedCount");

    const progressElement =
        document.getElementById("progress");


    // Unique subjects

    const subjects = new Set(

        tasks
            .map(task =>
                String(
                    task.subject || ""
                )
                .trim()
                .toLowerCase()
            )
            .filter(subject =>
                subject.length > 0
            )

    );


    // Completed

    const completed =
        tasks.filter(
            task =>
                task.completed === true
        );


    // Progress

    let percentage = 0;


    if (tasks.length > 0) {

        percentage =
            Math.round(
                (
                    completed.length /
                    tasks.length
                ) * 100
            );

    }


    // Display

    if (subjectElement) {

        subjectElement.textContent =
            subjects.size;

    }


    if (completedElement) {

        completedElement.textContent =
            completed.length;

    }


    if (progressElement) {

        progressElement.textContent =
            percentage + "%";

    }

}


// =========================================
// INITIAL LOAD
// =========================================

document.addEventListener(
    "DOMContentLoaded",
    updateDashboard
);


// =========================================
// UPDATE WHEN RETURNING TO PAGE
// =========================================

window.addEventListener(
    "pageshow",
    updateDashboard
);