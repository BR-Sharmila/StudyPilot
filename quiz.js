/* =========================================
   STUDYPILOT — QUIZ JAVASCRIPT
========================================= */

const questions = [
    {
        category: "Programming",
        question: "Which language is commonly used for data structures and algorithms?",
        options: ["HTML", "C++", "CSS", "SQL"],
        answer: 1
    },
    {
        category: "Programming",
        question: "Which symbol is used for a single-line comment in C++?",
        options: ["//", "<!--", "##", "**"],
        answer: 0
    },
    {
        category: "Python",
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "fun", "define"],
        answer: 1
    },
    {
        category: "Python",
        question: "Which data type stores key-value pairs in Python?",
        options: ["List", "Tuple", "Dictionary", "Set"],
        answer: 2
    },
    {
        category: "DSA",
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Stack", "Array", "Graph"],
        answer: 1
    },
    {
        category: "DSA",
        question: "Which data structure follows FIFO?",
        options: ["Stack", "Tree", "Queue", "Heap"],
        answer: 2
    },
    {
        category: "DSA",
        question: "What is the average time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        answer: 1
    },
    {
        category: "DSA",
        question: "Which data structure is used in BFS?",
        options: ["Stack", "Queue", "Heap", "Array"],
        answer: 1
    },
    {
        category: "DSA",
        question: "Which data structure is commonly used in DFS?",
        options: ["Queue", "Stack", "Hash table", "Heap"],
        answer: 1
    },
    {
        category: "Programming",
        question: "Which operator represents logical AND in C?",
        options: ["&", "&&", "||", "!"],
        answer: 1
    },
    {
        category: "Programming",
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do-while", "foreach"],
        answer: 2
    },
    {
        category: "Programming",
        question: "Which of these is not a primitive data type in Java?",
        options: ["int", "float", "boolean", "String"],
        answer: 3
    },
    {
        category: "OOP",
        question: "What does OOP stand for?",
        options: [
            "Object Oriented Programming",
            "Object Operating Program",
            "Open Object Programming",
            "Ordered Object Process"
        ],
        answer: 0
    },
    {
        category: "OOP",
        question: "Which concept hides implementation details?",
        options: [
            "Inheritance",
            "Encapsulation",
            "Polymorphism",
            "Compilation"
        ],
        answer: 1
    },
    {
        category: "OOP",
        question: "Which concept allows one class to inherit another?",
        options: [
            "Inheritance",
            "Encapsulation",
            "Abstraction",
            "Parsing"
        ],
        answer: 0
    },
    {
        category: "OOP",
        question: "What is the ability of an object to take many forms?",
        options: [
            "Inheritance",
            "Polymorphism",
            "Compilation",
            "Iteration"
        ],
        answer: 1
    },
    {
        category: "DBMS",
        question: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "Simple Query Language",
            "System Query Logic",
            "Structured Question Language"
        ],
        answer: 0
    },
    {
        category: "DBMS",
        question: "Which command is used to retrieve data?",
        options: ["GET", "SELECT", "FETCH", "READ"],
        answer: 1
    },
    {
        category: "DBMS",
        question: "Which key uniquely identifies a row?",
        options: [
            "Foreign key",
            "Primary key",
            "Candidate key",
            "Composite key"
        ],
        answer: 1
    },
    {
        category: "DBMS",
        question: "Which command removes a table?",
        options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
        answer: 2
    },
    {
        category: "Computer Networks",
        question: "What does IP stand for?",
        options: [
            "Internet Protocol",
            "Internal Program",
            "Internet Process",
            "Information Protocol"
        ],
        answer: 0
    },
    {
        category: "Computer Networks",
        question: "Which protocol is used for web browsing?",
        options: ["FTP", "HTTP", "SMTP", "SSH"],
        answer: 1
    },
    {
        category: "Computer Networks",
        question: "Which device connects different networks?",
        options: ["Switch", "Router", "Hub", "Repeater"],
        answer: 1
    },
    {
        category: "Computer Networks",
        question: "What does LAN stand for?",
        options: [
            "Local Area Network",
            "Large Area Network",
            "Logical Area Network",
            "Local Access Node"
        ],
        answer: 0
    },
    {
        category: "Operating Systems",
        question: "Which is an operating system?",
        options: ["Python", "Linux", "HTML", "MySQL"],
        answer: 1
    },
    {
        category: "Operating Systems",
        question: "Which manages computer hardware and software resources?",
        options: [
            "Compiler",
            "Operating System",
            "Browser",
            "Editor"
        ],
        answer: 1
    },
    {
        category: "Operating Systems",
        question: "Which scheduling algorithm executes processes in order of arrival?",
        options: [
            "Round Robin",
            "FCFS",
            "SJF",
            "Priority"
        ],
        answer: 1
    },
    {
        category: "Operating Systems",
        question: "What is a process?",
        options: [
            "A program in execution",
            "A file",
            "A compiler",
            "A database"
        ],
        answer: 0
    },
    {
        category: "Computer Science",
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Processing Unit",
            "Central Program Utility",
            "Core Processing Unit"
        ],
        answer: 0
    },
    {
        category: "Computer Science",
        question: "Which memory is volatile?",
        options: ["ROM", "RAM", "SSD", "Hard disk"],
        answer: 1
    },
    {
        category: "Computer Science",
        question: "Which is faster?",
        options: ["RAM", "Cache", "Hard disk", "USB"],
        answer: 1
    },
    {
        category: "Computer Science",
        question: "What is the binary representation of decimal 2?",
        options: ["01", "10", "11", "100"],
        answer: 1
    },
    {
        category: "Web",
        question: "What does HTML stand for?",
        options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyperlink Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        category: "Web",
        question: "Which language styles web pages?",
        options: ["HTML", "CSS", "SQL", "Python"],
        answer: 1
    },
    {
        category: "Web",
        question: "Which language adds interactivity to web pages?",
        options: ["CSS", "HTML", "JavaScript", "SQL"],
        answer: 2
    },
    {
        category: "Web",
        question: "Which HTML tag creates a hyperlink?",
        options: ["link tag", "a tag", "href tag", "url tag"],
        answer: 1
    },
    {
        category: "Web",
        question: "Which CSS property changes text color?",
        options: ["font", "color", "text", "background"],
        answer: 1
    },
    {
        category: "Git",
        question: "Which command creates a Git repository?",
        options: [
            "git start",
            "git init",
            "git create",
            "git new"
        ],
        answer: 1
    },
    {
        category: "Git",
        question: "Which command uploads commits to a remote repository?",
        options: [
            "git push",
            "git send",
            "git upload",
            "git publish"
        ],
        answer: 0
    },
    {
        category: "Git",
        question: "Which command downloads remote changes?",
        options: [
            "git pull",
            "git download",
            "git fetchall",
            "git receive"
        ],
        answer: 0
    },
    {
        category: "GitHub",
        question: "GitHub is mainly used for?",
        options: [
            "Version control and collaboration",
            "Video editing",
            "Gaming",
            "Photo editing"
        ],
        answer: 0
    },
    {
        category: "Python",
        question: "Which symbol starts a list in Python?",
        options: ["()", "[]", "{}", "<>"],
        answer: 1
    },
    {
        category: "Python",
        question: "Which Python function returns the length of an object?",
        options: ["size()", "length()", "len()", "count()"],
        answer: 2
    },
    {
        category: "Python",
        question: "Which keyword creates a class?",
        options: ["object", "class", "define", "struct"],
        answer: 1
    },
    {
        category: "Python",
        question: "Which value represents no value in Python?",
        options: ["null", "none", "None", "void"],
        answer: 2
    },
    {
        category: "Python",
        question: "Which statement handles exceptions?",
        options: [
            "try-except",
            "check-catch",
            "error-handle",
            "catch-error"
        ],
        answer: 0
    },
    {
        category: "DSA",
        question: "Which data structure is used to represent hierarchical data?",
        options: ["Tree", "Queue", "Stack", "Array"],
        answer: 0
    },
    {
        category: "DSA",
        question: "Which data structure consists of vertices and edges?",
        options: ["Tree", "Graph", "Stack", "Queue"],
        answer: 1
    },
    {
        category: "DSA",
        question: "What is the worst-case complexity of linear search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 2
    },
    {
        category: "DSA",
        question: "Which sorting algorithm repeatedly swaps adjacent elements?",
        options: [
            "Merge sort",
            "Bubble sort",
            "Quick sort",
            "Heap sort"
        ],
        answer: 1
    },
    {
        category: "DSA",
        question: "Which sorting algorithm uses divide and conquer?",
        options: [
            "Bubble sort",
            "Merge sort",
            "Selection sort",
            "Counting sort"
        ],
        answer: 1
    },
    {
        category: "DSA",
        question: "Which data structure supports insertion at both ends?",
        options: ["Deque", "Stack", "Tree", "Heap"],
        answer: 0
    },
    {
        category: "Algorithms",
        question: "What is an algorithm?",
        options: [
            "A step-by-step procedure",
            "A programming language",
            "A database",
            "A computer"
        ],
        answer: 0
    },
    {
        category: "Algorithms",
        question: "Which algorithm finds the shortest path in a weighted graph with non-negative weights?",
        options: [
            "DFS",
            "BFS",
            "Dijkstra",
            "Binary Search"
        ],
        answer: 2
    },
    {
        category: "Algorithms",
        question: "Which algorithm is commonly used for minimum spanning tree?",
        options: [
            "Dijkstra",
            "Kruskal",
            "Binary Search",
            "BFS"
        ],
        answer: 1
    },
    {
        category: "Math",
        question: "What is 10 × 10?",
        options: ["10", "50", "100", "1000"],
        answer: 2
    },
    {
        category: "Math",
        question: "What is the derivative of x²?",
        options: ["x", "2x", "x²", "2"],
        answer: 1
    },
    {
        category: "Math",
        question: "What is the value of sin 90°?",
        options: ["0", "1", "-1", "0.5"],
        answer: 1
    },
    {
        category: "Math",
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "14"],
        answer: 2
    },
    {
        category: "Math",
        question: "What is 2⁵?",
        options: ["10", "16", "25", "32"],
        answer: 3
    },
    {
        category: "Engineering",
        question: "Which unit measures electrical resistance?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        answer: 2
    },
    {
        category: "Engineering",
        question: "Which unit measures power?",
        options: ["Volt", "Watt", "Ohm", "Ampere"],
        answer: 1
    },
    {
        category: "Engineering",
        question: "Which device converts AC to DC?",
        options: [
            "Rectifier",
            "Transformer",
            "Motor",
            "Generator"
        ],
        answer: 0
    },
    {
        category: "Engineering",
        question: "Which component stores electrical charge?",
        options: [
            "Resistor",
            "Capacitor",
            "Diode",
            "Transistor"
        ],
        answer: 1
    },
    {
        category: "Engineering",
        question: "Which component opposes current?",
        options: [
            "Capacitor",
            "Resistor",
            "Battery",
            "Diode"
        ],
        answer: 1
    },
    {
        category: "CSE",
        question: "What does IDE stand for?",
        options: [
            "Integrated Development Environment",
            "Internet Development Engine",
            "Integrated Data Editor",
            "Internal Development Environment"
        ],
        answer: 0
    },
    {
        category: "CSE",
        question: "Which is a popular code editor?",
        options: [
            "VS Code",
            "Photoshop",
            "Excel",
            "PowerPoint"
        ],
        answer: 0
    },
    {
        category: "CSE",
        question: "What does API stand for?",
        options: [
            "Application Programming Interface",
            "Application Program Internet",
            "Advanced Programming Interface",
            "Application Process Integration"
        ],
        answer: 0
    },
    {
        category: "CSE",
        question: "What does URL stand for?",
        options: [
            "Uniform Resource Locator",
            "Universal Resource Link",
            "Uniform Reference Link",
            "Universal Routing Locator"
        ],
        answer: 0
    },
    {
        category: "CSE",
        question: "What does HTTP status code 404 usually mean?",
        options: [
            "Success",
            "Server error",
            "Not found",
            "Unauthorized"
        ],
        answer: 2
    },
    {
        category: "Security",
        question: "What is authentication?",
        options: [
            "Verifying identity",
            "Encrypting files",
            "Deleting data",
            "Compressing data"
        ],
        answer: 0
    },
    {
        category: "Security",
        question: "What is encryption?",
        options: [
            "Converting data into protected form",
            "Deleting data",
            "Copying data",
            "Sorting data"
        ],
        answer: 0
    },
    {
        category: "Security",
        question: "Which is a strong password characteristic?",
        options: [
            "Only your name",
            "123456",
            "Long and unique",
            "Your birthday"
        ],
        answer: 2
    },
    {
        category: "Cloud",
        question: "What is cloud computing?",
        options: [
            "Computing services delivered over the internet",
            "Weather prediction",
            "Local storage only",
            "A programming language"
        ],
        answer: 0
    },
    {
        category: "Cloud",
        question: "Which is a cloud platform?",
        options: ["AWS", "HTML", "Git", "Python"],
        answer: 0
    },
    {
        category: "AI",
        question: "What does AI stand for?",
        options: [
            "Artificial Intelligence",
            "Automatic Internet",
            "Advanced Information",
            "Artificial Integration"
        ],
        answer: 0
    },
    {
        category: "AI",
        question: "Machine learning is a subset of?",
        options: ["AI", "HTML", "CSS", "DBMS"],
        answer: 0
    },
    {
        category: "AI",
        question: "What is supervised learning?",
        options: [
            "Learning with labelled data",
            "Learning without data",
            "Learning only from hardware",
            "Manual programming"
        ],
        answer: 0
    },
    {
        category: "AI",
        question: "Which is commonly used in machine learning?",
        options: ["Python", "HTML", "CSS", "XML"],
        answer: 0
    },
    {
        category: "Data",
        question: "What is a dataset?",
        options: [
            "A collection of data",
            "A processor",
            "A programming language",
            "A network cable"
        ],
        answer: 0
    },
    {
        category: "Data",
        question: "Which format is commonly used for structured tabular data?",
        options: ["CSV", "MP3", "PNG", "MP4"],
        answer: 0
    },
    {
        category: "Database",
        question: "What is a database?",
        options: [
            "Organized collection of data",
            "A compiler",
            "A browser",
            "A keyboard"
        ],
        answer: 0
    },
    {
        category: "Database",
        question: "Which is a relational database?",
        options: [
            "MySQL",
            "Photoshop",
            "Git",
            "VS Code"
        ],
        answer: 0
    },
    {
        category: "Database",
        question: "Which SQL clause filters rows?",
        options: [
            "WHERE",
            "ORDER",
            "GROUP",
            "FILTER"
        ],
        answer: 0
    },
    {
        category: "Database",
        question: "Which SQL clause sorts results?",
        options: [
            "SORT",
            "ORDER BY",
            "ARRANGE",
            "SORT BY"
        ],
        answer: 1
    },
    {
        category: "Programming",
        question: "What is a variable?",
        options: [
            "A named storage location",
            "A computer",
            "A network",
            "A database"
        ],
        answer: 0
    },
    {
        category: "Programming",
        question: "What is a compiler?",
        options: [
            "A program that translates source code",
            "A database",
            "A browser",
            "An operating system"
        ],
        answer: 0
    },
    {
        category: "Programming",
        question: "Which language is mainly used for web page structure?",
        options: [
            "HTML",
            "Python",
            "C++",
            "SQL"
        ],
        answer: 0
    },
    {
        category: "CSE",
        question: "What does CSE stand for?",
        options: [
            "Computer Science and Engineering",
            "Computer System Education",
            "Computer Software Engineering",
            "Central Science Engineering"
        ],
        answer: 0
    },
    {
        category: "CSE",
        question: "Which is an example of an operating system?",
        options: [
            "Windows",
            "Chrome",
            "GitHub",
            "Python"
        ],
        answer: 0
    },
    {
        category: "CSE",
        question: "Which tool is commonly used to manage source code versions?",
        options: [
            "Git",
            "Excel",
            "Word",
            "Paint"
        ],
        answer: 0
    },
    {
        category: "CSE",
        question: "What does RAM stand for?",
        options: [
            "Random Access Memory",
            "Read Access Memory",
            "Rapid Access Module",
            "Random Application Memory"
        ],
        answer: 0
    },
    {
        category: "CSE",
        question: "What does ROM stand for?",
        options: [
            "Read Only Memory",
            "Random Only Memory",
            "Read Open Memory",
            "Rapid Output Memory"
        ],
        answer: 0
    },
    {
        category: "DSA",
        question: "Which structure is best suited for implementing recursion?",
        options: [
            "Stack",
            "Queue",
            "Graph",
            "Hash table"
        ],
        answer: 0
    },
    {
        category: "DSA",
        question: "Which structure provides average O(1) lookup by key?",
        options: [
            "Hash table",
            "Array",
            "Stack",
            "Queue"
        ],
        answer: 0
    },
    {
        category: "Algorithms",
        question: "What is the purpose of sorting?",
        options: [
            "Arrange data in a specific order",
            "Delete data",
            "Encrypt data",
            "Compress data"
        ],
        answer: 0
    },
    {
        category: "Algorithms",
        question: "Binary search requires the data to be?",
        options: [
            "Sorted",
            "Encrypted",
            "Random",
            "Duplicated"
        ],
        answer: 0
    },
    {
        category: "OOP",
        question: "What is a class?",
        options: [
            "A blueprint for objects",
            "A database",
            "A loop",
            "A variable"
        ],
        answer: 0
    },
    {
        category: "OOP",
        question: "What is an object?",
        options: [
            "An instance of a class",
            "A compiler",
            "A function only",
            "A database"
        ],
        answer: 0
    },
    {
        category: "Web",
        question: "Which CSS property controls the space inside an element?",
        options: [
            "margin",
            "padding",
            "border",
            "gap"
        ],
        answer: 1
    },
    {
        category: "Web",
        question: "Which CSS property controls the space outside an element?",
        options: [
            "padding",
            "margin",
            "border",
            "width"
        ],
        answer: 1
    },
    {
        category: "Web",
        question: "Which HTML tag represents the largest heading?",
        options: [
            "h6",
            "heading",
            "h1",
            "head"
        ],
        answer: 2
    },
    {
        category: "Git",
        question: "Which command shows the current Git status?",
        options: [
            "git status",
            "git showall",
            "git check",
            "git info"
        ],
        answer: 0
    },
    {
        category: "Git",
        question: "Which command creates a commit?",
        options: [
            "git save",
            "git commit",
            "git store",
            "git addcommit"
        ],
        answer: 1
    },
    {
        category: "Git",
        question: "Which command stages files?",
        options: [
            "git stage",
            "git add",
            "git prepare",
            "git upload"
        ],
        answer: 1
    },
    {
        category: "Career",
        question: "Which skill is important for software developer interviews?",
        options: [
            "DSA",
            "Only typing",
            "Only gaming",
            "Only design"
        ],
        answer: 0
    },
    {
        category: "Career",
        question: "What should a good software developer build?",
        options: [
            "Real projects",
            "Only certificates",
            "Only notes",
            "Nothing"
        ],
        answer: 0
    },
    {
        category: "Career",
        question: "What is GitHub useful for students?",
        options: [
            "Showing projects and code",
            "Only watching movies",
            "Only chatting",
            "Editing photos"
        ],
        answer: 0
    }
];


/* =========================================
   QUIZ STATE
========================================= */

let currentQuestion = 0;
let selectedAnswers = new Array(questions.length).fill(null);
let skippedQuestions = new Set();
let answeredQuestions = new Set();


/* =========================================
   START
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    setupButtons();
    updateTotalCount();
    showQuestion();

});


/* =========================================
   BUTTON SETUP
========================================= */

function setupButtons() {

    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");
    const skipBtn = document.getElementById("skipBtn");
    const restartBtn = document.getElementById("restartBtn");

    if (backBtn) {
        backBtn.addEventListener("click", previousQuestion);
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", nextQuestion);
    }

    if (skipBtn) {
        skipBtn.addEventListener("click", skipQuestion);
    }

    if (restartBtn) {
        restartBtn.addEventListener("click", restartQuiz);
    }
}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const question = questions[currentQuestion];

    if (!question) {
        return;
    }

    const questionNumber = document.getElementById("questionNumber");
    const questionCategory = document.getElementById("questionCategory");
    const questionText = document.getElementById("questionText");
    const quizProgress = document.getElementById("quizProgress");
    const optionsContainer = document.getElementById("quizOptions");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");
    const skipBtn = document.getElementById("skipBtn");

    if (questionNumber) {
        questionNumber.textContent =
            `Question ${currentQuestion + 1} / ${questions.length}`;
    }

    if (questionCategory) {
        questionCategory.textContent = question.category;
    }

    if (questionText) {
        questionText.textContent = question.question;
    }

    if (quizProgress) {

        const progress =
            ((currentQuestion + 1) / questions.length) * 100;

        quizProgress.style.width = `${progress}%`;
    }

    if (!optionsContainer) {
        return;
    }

    optionsContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    question.options.forEach(function (option, index) {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "quiz-option";

        const label = document.createElement("span");

        label.className = "option-letter";
        label.textContent = letters[index];

        const text = document.createElement("span");

        text.className = "option-text";
        text.textContent = option;

        button.appendChild(label);
        button.appendChild(text);

        if (selectedAnswers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        if (answeredQuestions.has(currentQuestion)) {

            button.disabled = true;

            if (index === question.answer) {
                button.classList.add("correct");
            }

            if (
                selectedAnswers[currentQuestion] === index &&
                index !== question.answer
            ) {
                button.classList.add("wrong");
            }
        }

        button.addEventListener("click", function () {
            selectAnswer(index);
        });

        optionsContainer.appendChild(button);

    });


    if (backBtn) {
        backBtn.disabled = currentQuestion === 0;
    }

    if (nextBtn) {
        nextBtn.textContent =
            currentQuestion === questions.length - 1
                ? "Finish ✓"
                : "Next →";
    }

    if (skipBtn) {
        skipBtn.disabled =
            answeredQuestions.has(currentQuestion);
    }

    updateScoreDisplay();
}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(index) {

    if (answeredQuestions.has(currentQuestion)) {
        return;
    }

    selectedAnswers[currentQuestion] = index;

    skippedQuestions.delete(currentQuestion);

    answeredQuestions.add(currentQuestion);

    showQuestion();
}


/* =========================================
   NEXT
========================================= */

function nextQuestion() {

    if (currentQuestion === questions.length - 1) {
        finishQuiz();
        return;
    }

    currentQuestion++;

    showQuestion();
}


/* =========================================
   BACK
========================================= */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }
}


/* =========================================
   SKIP
========================================= */

function skipQuestion() {

    if (answeredQuestions.has(currentQuestion)) {
        return;
    }

    skippedQuestions.add(currentQuestion);

    selectedAnswers[currentQuestion] = null;

    if (currentQuestion === questions.length - 1) {

        finishQuiz();

        return;
    }

    currentQuestion++;

    showQuestion();
}


/* =========================================
   FINISH
========================================= */

function finishQuiz() {

    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    questions.forEach(function (question, index) {

        const answer = selectedAnswers[index];

        if (
            answer === null ||
            skippedQuestions.has(index)
        ) {

            skipped++;

        } else if (
            answer === question.answer
        ) {

            correct++;

        } else {

            wrong++;

        }

    });

    const total = questions.length;

    const percentage =
        Math.round((correct / total) * 100);

    localStorage.setItem(
        "lastQuizScore",
        correct
    );

    localStorage.setItem(
        "lastQuizPercentage",
        percentage
    );

    const quizBox = document.getElementById("quizBox");
    const quizResult = document.getElementById("quizResult");

    if (quizBox) {
        quizBox.style.display = "none";
    }

    if (quizResult) {
        quizResult.style.display = "block";
    }

    const finalScore = document.getElementById("finalScore");
    const correctCount = document.getElementById("correctCount");
    const wrongCount = document.getElementById("wrongCount");
    const skippedCount = document.getElementById("skippedCount");
    const percentageElement = document.getElementById("percentage");

    if (finalScore) {
        finalScore.textContent = correct;
    }

    if (correctCount) {
        correctCount.textContent = correct;
    }

    if (wrongCount) {
        wrongCount.textContent = wrong;
    }

    if (skippedCount) {
        skippedCount.textContent = skipped;
    }

    if (percentageElement) {
        percentageElement.textContent = percentage + "%";
    }

    updateTotalCount();
}


/* =========================================
   TOTAL COUNT
========================================= */

function updateTotalCount() {

    const totalElement =
        document.getElementById("totalCount");

    if (totalElement) {
        totalElement.textContent = questions.length;
    }
}


/* =========================================
   SCORE
========================================= */

function updateScoreDisplay() {

    const scoreElement =
        document.getElementById("quizScore");

    if (!scoreElement) {
        return;
    }

    let score = 0;

    questions.forEach(function (question, index) {

        if (
            answeredQuestions.has(index) &&
            selectedAnswers[index] === question.answer
        ) {

            score++;

        }

    });

    scoreElement.textContent = `Score: ${score}`;
}


/* =========================================
   RESTART
========================================= */

function restartQuiz() {

    currentQuestion = 0;

    selectedAnswers =
        new Array(questions.length).fill(null);

    skippedQuestions.clear();

    answeredQuestions.clear();

    const quizBox = document.getElementById("quizBox");
    const quizResult = document.getElementById("quizResult");

    if (quizBox) {
        quizBox.style.display = "block";
    }

    if (quizResult) {
        quizResult.style.display = "none";
    }

    showQuestion();
}