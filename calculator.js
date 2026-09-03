/* =========================================
   STUDYPILOT — VTU CALCULATOR
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       TAB SWITCHING
    ===================================== */

    const tabs = document.querySelectorAll(".calculator-tab");

    const panels = document.querySelectorAll(".calculator-panel");

    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            tabs.forEach(function (item) {
                item.classList.remove("active");
            });

            panels.forEach(function (panel) {
                panel.classList.remove("active");
            });

            tab.classList.add("active");

            const tabName = tab.dataset.tab;

            const selectedPanel =
                document.getElementById(tabName + "Panel");

            if (selectedPanel) {
                selectedPanel.classList.add("active");
            }

        });

    });


    /* =====================================
       MARKS CALCULATOR
    ===================================== */

    const calculateMarksBtn =
        document.getElementById("calculateMarksBtn");

    const resetMarksBtn =
        document.getElementById("resetMarksBtn");

    const obtainedMarks =
        document.getElementById("obtainedMarks");

    const maximumMarks =
        document.getElementById("maximumMarks");

    const marksResult =
        document.getElementById("marksResult");

    const percentageResult =
        document.getElementById("percentageResult");

    const gradeResult =
        document.getElementById("gradeResult");

    const performanceResult =
        document.getElementById("performanceResult");


    function getGradeFromPercentage(percentage) {

        if (percentage >= 90) return "O";
        if (percentage >= 80) return "A+";
        if (percentage >= 70) return "A";
        if (percentage >= 60) return "B+";
        if (percentage >= 55) return "B";
        if (percentage >= 50) return "C";
        if (percentage >= 40) return "P";

        return "F";
    }


    function getPerformance(percentage) {

        if (percentage >= 90) return "Outstanding";
        if (percentage >= 80) return "Excellent";
        if (percentage >= 70) return "Very Good";
        if (percentage >= 60) return "Good";
        if (percentage >= 50) return "Average";
        if (percentage >= 40) return "Pass";

        return "Needs Improvement";
    }


    if (calculateMarksBtn) {

        calculateMarksBtn.addEventListener("click", function () {

            const obtained =
                Number(obtainedMarks.value);

            const maximum =
                Number(maximumMarks.value);


            if (
                obtainedMarks.value === "" ||
                maximumMarks.value === ""
            ) {

                alert("Please enter both obtained and maximum marks.");

                return;
            }


            if (maximum <= 0) {

                alert("Maximum marks must be greater than 0.");

                return;
            }


            if (obtained < 0 || obtained > maximum) {

                alert(
                    "Obtained marks must be between 0 and maximum marks."
                );

                return;
            }


            const percentage =
                (obtained / maximum) * 100;


            const roundedPercentage =
                percentage.toFixed(2);


            percentageResult.textContent =
                roundedPercentage + "%";


            gradeResult.textContent =
                getGradeFromPercentage(percentage);


            performanceResult.textContent =
                getPerformance(percentage);


            marksResult.hidden = false;

        });

    }


    if (resetMarksBtn) {

        resetMarksBtn.addEventListener("click", function () {

            obtainedMarks.value = "";

            maximumMarks.value = "";

            percentageResult.textContent = "0%";

            gradeResult.textContent = "-";

            performanceResult.textContent = "-";

            marksResult.hidden = true;

        });

    }


    /* =====================================
       SGPA CALCULATOR
    ===================================== */

    const addSubjectBtn =
        document.getElementById("addSubjectBtn");

    const calculateSgpaBtn =
        document.getElementById("calculateSgpaBtn");

    const resetSgpaBtn =
        document.getElementById("resetSgpaBtn");

    const sgpaSubjects =
        document.getElementById("sgpaSubjects");

    const sgpaResult =
        document.getElementById("sgpaResult");

    const sgpaValue =
        document.getElementById("sgpaValue");


    /* =====================================
       CREATE SUBJECT
    ===================================== */

    function createSubjectRow() {

        const row =
            document.createElement("tr");

        row.innerHTML = `

            <td>

                <input
                    type="text"
                    class="subject-name"
                    placeholder="Subject">

            </td>

            <td>

                <input
                    type="number"
                    class="subject-credit"
                    min="1"
                    max="10"
                    step="1"
                    placeholder="4">

            </td>

            <td>

                <input
                    type="number"
                    class="subject-grade"
                    min="0"
                    max="10"
                    step="0.1"
                    placeholder="8">

            </td>

            <td>

                <button
                    type="button"
                    class="remove-subject">

                    ×

                </button>

            </td>

        `;

        return row;
    }


    /* =====================================
       ADD SUBJECT
    ===================================== */

    if (addSubjectBtn) {

        addSubjectBtn.addEventListener("click", function () {

            const row =
                createSubjectRow();

            sgpaSubjects.appendChild(row);

        });

    }


    /* =====================================
       REMOVE SUBJECT
    ===================================== */

    if (sgpaSubjects) {

        sgpaSubjects.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.classList.contains(
                        "remove-subject"
                    )
                ) {

                    const rows =
                        sgpaSubjects.querySelectorAll("tr");


                    if (rows.length > 1) {

                        event.target
                            .closest("tr")
                            .remove();

                    }

                }

            }
        );

    }


    /* =====================================
       CALCULATE SGPA
    ===================================== */

    if (calculateSgpaBtn) {

        calculateSgpaBtn.addEventListener(
            "click",
            function () {

                const rows =
                    sgpaSubjects.querySelectorAll("tr");


                let totalWeightedPoints = 0;

                let totalCredits = 0;

                let hasError = false;


                rows.forEach(function (row) {

                    const creditInput =
                        row.querySelector(
                            ".subject-credit"
                        );

                    const gradeInput =
                        row.querySelector(
                            ".subject-grade"
                        );


                    const credit =
                        Number(creditInput.value);

                    const grade =
                        Number(gradeInput.value);


                    if (
                        creditInput.value === "" ||
                        gradeInput.value === ""
                    ) {

                        hasError = true;

                        return;
                    }


                    if (
                        credit <= 0 ||
                        grade < 0 ||
                        grade > 10
                    ) {

                        hasError = true;

                        return;
                    }


                    totalWeightedPoints +=
                        credit * grade;


                    totalCredits +=
                        credit;

                });


                if (hasError) {

                    alert(
                        "Please enter valid credits and grade points for every subject."
                    );

                    return;
                }


                if (totalCredits === 0) {

                    alert(
                        "Please add at least one subject."
                    );

                    return;
                }


                const sgpa =
                    totalWeightedPoints /
                    totalCredits;


                sgpaValue.textContent =
                    sgpa.toFixed(2);


                sgpaResult.hidden = false;


                /* Save SGPA */

                saveSGPA(sgpa);

            }
        );

    }


    /* =====================================
       SAVE SGPA
    ===================================== */

    function saveSGPA(sgpa) {

        const semesterInputs =
            document.querySelectorAll(
                ".semester-sgpa"
            );


        if (semesterInputs.length === 0) {
            return;
        }

        /*
           Save latest calculated SGPA
           so it can be used for CGPA.
        */

        localStorage.setItem(
            "studypilot_last_sgpa",
            sgpa.toFixed(2)
        );

    }


    /* =====================================
       RESET SGPA
    ===================================== */

    if (resetSgpaBtn) {

        resetSgpaBtn.addEventListener(
            "click",
            function () {

                const rows =
                    sgpaSubjects.querySelectorAll("tr");


                rows.forEach(function (row, index) {

                    if (index === 0) {

                        row.querySelector(
                            ".subject-name"
                        ).value = "";

                        row.querySelector(
                            ".subject-credit"
                        ).value = "";

                        row.querySelector(
                            ".subject-grade"
                        ).value = "";

                    } else {

                        row.remove();

                    }

                });


                sgpaValue.textContent =
                    "0.00";


                sgpaResult.hidden = true;

            }
        );

    }


    /* =====================================
       CGPA CALCULATOR
    ===================================== */

    const addSemesterBtn =
        document.getElementById("addSemesterBtn");

    const calculateCgpaBtn =
        document.getElementById("calculateCgpaBtn");

    const resetCgpaBtn =
        document.getElementById("resetCgpaBtn");

    const semesterList =
        document.getElementById("semesterList");

    const cgpaResult =
        document.getElementById("cgpaResult");

    const cgpaValue =
        document.getElementById("cgpaValue");


    /* =====================================
       ADD SEMESTER
    ===================================== */

    if (addSemesterBtn) {

        addSemesterBtn.addEventListener(
            "click",
            function () {

                const semesterNumber =
                    semesterList.querySelectorAll(
                        ".semester-row"
                    ).length + 1;


                const row =
                    document.createElement("div");

                row.className =
                    "semester-row";


                row.innerHTML = `

                    <label>
                        Semester ${semesterNumber}
                    </label>

                    <input
                        type="number"
                        class="semester-sgpa"
                        min="0"
                        max="10"
                        step="0.01"
                        placeholder="Example: 8.50">

                `;


                semesterList.appendChild(row);

            }
        );

    }


    /* =====================================
       CALCULATE CGPA
    ===================================== */

    if (calculateCgpaBtn) {

        calculateCgpaBtn.addEventListener(
            "click",
            function () {

                const inputs =
                    semesterList.querySelectorAll(
                        ".semester-sgpa"
                    );


                let total = 0;

                let count = 0;

                let hasError = false;


                inputs.forEach(function (input) {

                    if (input.value === "") {
                        return;
                    }


                    const sgpa =
                        Number(input.value);


                    if (
                        sgpa < 0 ||
                        sgpa > 10
                    ) {

                        hasError = true;

                        return;
                    }


                    total += sgpa;

                    count++;

                });


                if (hasError) {

                    alert(
                        "SGPA must be between 0 and 10."
                    );

                    return;
                }


                if (count === 0) {

                    alert(
                        "Please enter at least one semester SGPA."
                    );

                    return;
                }


                const cgpa =
                    total / count;


                cgpaValue.textContent =
                    cgpa.toFixed(2);


                cgpaResult.hidden = false;

            }
        );

    }


    /* =====================================
       RESET CGPA
    ===================================== */

    if (resetCgpaBtn) {

        resetCgpaBtn.addEventListener(
            "click",
            function () {

                const inputs =
                    semesterList.querySelectorAll(
                        ".semester-sgpa"
                    );


                inputs.forEach(function (input) {

                    input.value = "";

                });


                cgpaValue.textContent =
                    "0.00";


                cgpaResult.hidden = true;

            }
        );

    }

});