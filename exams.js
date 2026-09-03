const EXAMS_KEY = "studypilot_exams";


/* =========================================
   ELEMENTS
========================================= */

const examModal = document.getElementById("examModal");
const examForm = document.getElementById("examForm");

const addExamBtn = document.getElementById("addExamBtn");
const addFirstExamBtn = document.getElementById("addFirstExamBtn");

const closeExamModalBtn =
    document.getElementById("closeExamModalBtn");

const cancelExamModalBtn =
    document.getElementById("cancelExamModalBtn");

const examList =
    document.getElementById("examList");

const examEmpty =
    document.getElementById("examEmpty");

const examFilter =
    document.getElementById("examFilter");


/* FORM */

const examId =
    document.getElementById("examId");

const examName =
    document.getElementById("examName");

const examSubject =
    document.getElementById("examSubject");

const examCode =
    document.getElementById("examCode");

const examDate =
    document.getElementById("examDate");

const examTime =
    document.getElementById("examTime");

const examPriority =
    document.getElementById("examPriority");

const examSyllabus =
    document.getElementById("examSyllabus");

const examModalTitle =
    document.getElementById("examModalTitle");


/* STATS */

const totalExams =
    document.getElementById("totalExams");

const upcomingExams =
    document.getElementById("upcomingExams");

const completedExams =
    document.getElementById("completedExams");

const highPriorityExams =
    document.getElementById("highPriorityExams");

const visibleExamCount =
    document.getElementById("visibleExamCount");

const headerDate =
    document.getElementById("headerDate");


/* =========================================
   DATE HELPERS
========================================= */

function getToday() {

    const now = new Date();

    const year =
        now.getFullYear();

    const month =
        String(now.getMonth() + 1)
            .padStart(2, "0");

    const day =
        String(now.getDate())
            .padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function displayDate(date) {

    if (!date) return "";

    const d =
        new Date(date + "T00:00:00");

    return d.toLocaleDateString(
        "en-IN",
        {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );
}


/* =========================================
   DAYS REMAINING
========================================= */

function getDaysRemaining(date) {

    const today =
        new Date(getToday() + "T00:00:00");

    const examDay =
        new Date(date + "T00:00:00");

    const difference =
        examDay - today;

    return Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );
}


/* =========================================
   LOCAL STORAGE
========================================= */

function getExams() {

    const data =
        localStorage.getItem(EXAMS_KEY);

    if (!data) {
        return [];
    }

    try {

        return JSON.parse(data);

    } catch (error) {

        console.error(
            "Exam data error:",
            error
        );

        return [];
    }
}


function saveExams(exams) {

    localStorage.setItem(
        EXAMS_KEY,
        JSON.stringify(exams)
    );

    console.log(
        "EXAMS SAVED:",
        exams
    );
}


/* =========================================
   OPEN MODAL
========================================= */

function openExamModal() {

    examForm.reset();

    examId.value = "";

    examModalTitle.textContent =
        "Add New Exam";

    examDate.value =
        getToday();

    examPriority.value =
        "medium";

    examModal.hidden = false;

    document.body.style.overflow =
        "hidden";

    setTimeout(() => {

        examName.focus();

    }, 100);
}


/* =========================================
   CLOSE MODAL
========================================= */

function closeExamModal() {

    examModal.hidden = true;

    document.body.style.overflow =
        "";

    examForm.reset();

    examId.value = "";

    examModalTitle.textContent =
        "Add New Exam";
}


/* =========================================
   SAVE EXAM
========================================= */

examForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        console.log(
            "SAVE EXAM BUTTON CLICKED"
        );


        const name =
            examName.value.trim();

        const subject =
            examSubject.value.trim();

        const code =
            examCode.value.trim();

        const date =
            examDate.value;

        const time =
            examTime.value;

        const priority =
            examPriority.value;

        const syllabus =
            examSyllabus.value.trim();


        if (name === "") {

            alert(
                "Please enter the exam name."
            );

            examName.focus();

            return;
        }


        if (subject === "") {

            alert(
                "Please enter the subject."
            );

            examSubject.focus();

            return;
        }


        if (date === "") {

            alert(
                "Please select the exam date."
            );

            examDate.focus();

            return;
        }


        let exams =
            getExams();


        /* EDIT */

        if (examId.value !== "") {

            const index =
                exams.findIndex(
                    exam =>
                        exam.id ===
                        examId.value
                );


            if (index !== -1) {

                exams[index].name =
                    name;

                exams[index].subject =
                    subject;

                exams[index].code =
                    code;

                exams[index].date =
                    date;

                exams[index].time =
                    time;

                exams[index].priority =
                    priority;

                exams[index].syllabus =
                    syllabus;

            }

        }


        /* CREATE */

        else {

            const newExam = {

                id:
                    Date.now().toString(),

                name:
                    name,

                subject:
                    subject,

                code:
                    code,

                date:
                    date,

                time:
                    time,

                priority:
                    priority,

                syllabus:
                    syllabus,

                completed:
                    false

            };


            exams.push(newExam);

        }


        saveExams(exams);

        closeExamModal();

        renderExams();

        alert(
            "Exam saved successfully!"
        );

    }
);


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
   RENDER EXAMS
========================================= */

function renderExams() {

    const exams =
        getExams();

    const filter =
        examFilter.value;


    let visible =
        [...exams];


    /* FILTER */

    if (filter === "upcoming") {

        visible =
            visible.filter(
                exam =>
                    !exam.completed
            );

    }


    if (filter === "completed") {

        visible =
            visible.filter(
                exam =>
                    exam.completed
            );

    }


    /* SORT BY DATE */

    visible.sort(
        (a, b) => {

            return (
                a.date.localeCompare(b.date)
            );

        }
    );


    /* COUNT */

    visibleExamCount.textContent =
        `${visible.length} ${
            visible.length === 1
                ? "exam"
                : "exams"
        }`;


    /* CLEAR */

    examList.innerHTML = "";


    /* EMPTY */

    if (visible.length === 0) {

        examEmpty.hidden = false;

    } else {

        examEmpty.hidden = true;

    }


    /* CREATE CARDS */

    visible.forEach(
        exam => {

            const item =
                document.createElement("div");

            item.className =
                "exam-card";


            if (exam.completed) {

                item.classList.add(
                    "completed"
                );

            }


            const days =
                getDaysRemaining(exam.date);


            let daysText = "";


            if (exam.completed) {

                daysText =
                    "Completed";

            } else if (days < 0) {

                daysText =
                    "Exam passed";

            } else if (days === 0) {

                daysText =
                    "Today";

            } else if (days === 1) {

                daysText =
                    "1 day left";

            } else {

                daysText =
                    `${days} days left`;

            }


            item.innerHTML = `

                <button
                    type="button"
                    class="exam-card-check"
                    data-action="complete"
                    data-id="${exam.id}">

                    ${exam.completed ? "✓" : ""}

                </button>


                <div class="exam-content">

                    <div class="exam-title">
                        ${escapeHTML(exam.name)}
                    </div>


                    <div class="exam-meta">

                        <span>
                            📚 ${escapeHTML(exam.subject)}
                        </span>

                        ${
                            exam.code
                            ?
                            `<span>
                                # ${escapeHTML(exam.code)}
                            </span>`
                            :
                            ""
                        }

                        <span>
                            📅 ${escapeHTML(
                                displayDate(exam.date)
                            )}
                        </span>

                        ${
                            exam.time
                            ?
                            `<span>
                                ◷ ${escapeHTML(exam.time)}
                            </span>`
                            :
                            ""
                        }

                    </div>


                    ${
                        exam.syllabus
                        ?
                        `<div class="exam-notes">
                            ${escapeHTML(exam.syllabus)}
                        </div>`
                        :
                        ""
                    }

                </div>


                <div class="exam-days">

                    <strong>
                        ${daysText}
                    </strong>

                    <span>
                        Preparation
                    </span>

                </div>


                <span class="
                    exam-priority
                    priority-${escapeHTML(exam.priority)}
                ">

                    ${escapeHTML(exam.priority)}

                </span>


                <div class="exam-actions">

                    <button
                        type="button"
                        class="exam-action"
                        data-action="edit"
                        data-id="${exam.id}">

                        ✎

                    </button>


                    <button
                        type="button"
                        class="exam-action delete"
                        data-action="delete"
                        data-id="${exam.id}">

                        ×

                    </button>

                </div>

            `;


            examList.appendChild(item);

        }
    );


    updateExamStats(exams);

}


/* =========================================
   STATISTICS
========================================= */

function updateExamStats(exams) {

    const total =
        exams.length;


    const completed =
        exams.filter(
            exam =>
                exam.completed
        ).length;


    const upcoming =
        exams.filter(
            exam =>
                !exam.completed &&
                getDaysRemaining(exam.date) >= 0
        ).length;


    const high =
        exams.filter(
            exam =>
                exam.priority === "high" &&
                !exam.completed
        ).length;


    totalExams.textContent =
        total;

    upcomingExams.textContent =
        upcoming;

    completedExams.textContent =
        completed;

    highPriorityExams.textContent =
        high;

}


/* =========================================
   EXAM ACTIONS
========================================= */

examList.addEventListener(
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


        let exams =
            getExams();


        /* COMPLETE */

        if (
            action === "complete"
        ) {

            const exam =
                exams.find(
                    item =>
                        item.id === id
                );


            if (exam) {

                exam.completed =
                    !exam.completed;

                saveExams(exams);

                renderExams();

            }

        }


        /* EDIT */

        if (
            action === "edit"
        ) {

            const exam =
                exams.find(
                    item =>
                        item.id === id
                );


            if (!exam) return;


            examId.value =
                exam.id;

            examName.value =
                exam.name;

            examSubject.value =
                exam.subject;

            examCode.value =
                exam.code || "";

            examDate.value =
                exam.date;

            examTime.value =
                exam.time || "";

            examPriority.value =
                exam.priority || "medium";

            examSyllabus.value =
                exam.syllabus || "";


            examModalTitle.textContent =
                "Edit Exam";


            examModal.hidden =
                false;

            document.body.style.overflow =
                "hidden";

            examName.focus();

        }


        /* DELETE */

        if (
            action === "delete"
        ) {

            const confirmed =
                confirm(
                    "Delete this exam?"
                );


            if (!confirmed) return;


            exams =
                exams.filter(
                    exam =>
                        exam.id !== id
                );


            saveExams(exams);

            renderExams();

        }

    }
);


/* =========================================
   BUTTONS
========================================= */

addExamBtn.addEventListener(
    "click",
    openExamModal
);


addFirstExamBtn.addEventListener(
    "click",
    openExamModal
);


closeExamModalBtn.addEventListener(
    "click",
    closeExamModal
);


cancelExamModalBtn.addEventListener(
    "click",
    closeExamModal
);


/* =========================================
   FILTER
========================================= */

examFilter.addEventListener(
    "change",
    renderExams
);


/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

examModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === examModal
        ) {

            closeExamModal();

        }

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            !examModal.hidden
        ) {

            closeExamModal();

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
   START
========================================= */

renderExams();

console.log(
    "StudyPilot Exams loaded successfully."
);