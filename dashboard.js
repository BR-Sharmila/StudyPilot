```javascript
/* =========================================
   STUDYPILOT DASHBOARD
========================================= */

// Display today's date

function updateDate() {

    const dateElement =
        document.getElementById("todayDate");

    if (!dateElement) return;

    const today = new Date();

    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric"
    };

    dateElement.textContent =
        today.toLocaleDateString("en-IN", options);
}


// Update dashboard statistics

function updateDashboardStats() {

    const tasks =
        JSON.parse(localStorage.getItem("studyTasks")) || [];

    const notes =
        JSON.parse(localStorage.getItem("studyNotes")) || [];

    const exams =
        JSON.parse(localStorage.getItem("exams")) || [];


    const today = new Date();

    const todayString =
        today.toISOString().split("T")[0];


    const todayTasks =
        tasks.filter(task => {

            return task.date === todayString;

        });


    const completed =
        todayTasks.filter(task => {

            return task.completed === true;

        });


    const upcoming =
        exams.filter(exam => {

            if (!exam.date) return false;

            return new Date(exam.date) >= today;

        });


    document.getElementById("todayTasks").textContent =
        todayTasks.length;

    document.getElementById("completedTasks").textContent =
        completed.length;

    document.getElementById("upcomingExams").textContent =
        upcoming.length;

    document.getElementById("savedNotes").textContent =
        notes.length;
}


// Run dashboard

updateDate();

updateDashboardStats();
```
