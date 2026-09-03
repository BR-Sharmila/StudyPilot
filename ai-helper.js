document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");
    const chatMessages = document.getElementById("chatMessages");

    // Send button
    sendButton.addEventListener("click", sendMessage);

    // Enter key
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });

    // Quick questions
    window.askQuickQuestion = function (question) {
        input.value = question;
        sendMessage();
    };

    function sendMessage() {

        const question = input.value.trim();

        if (!question) {
            return;
        }

        // Add user message
        addMessage(question, "user");

        // Clear input
        input.value = "";

        // Show AI reply
        setTimeout(function () {
            const answer = getAnswer(question);
            addMessage(answer, "ai");
        }, 500);
    }

    function addMessage(text, type) {

        const message = document.createElement("div");

        if (type === "user") {

            message.className = "message user-message";

            message.innerHTML = `
                <div class="message-content">
                    <strong>You</strong>
                    <div class="message-bubble">${escapeHTML(text)}</div>
                </div>
            `;

        } else {

            message.className = "message ai-message";

            message.innerHTML = `
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    <strong>StudyPilot AI</strong>
                    <div class="message-bubble">${escapeHTML(text)}</div>
                </div>
            `;
        }

        chatMessages.appendChild(message);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getAnswer(question) {

        const q = question.toLowerCase();

        if (q.includes("dsa")) {
            return "DSA means Data Structures and Algorithms. 📚 It helps us organize data efficiently and solve programming problems.";
        }

        if (q.includes("oop")) {
            return "OOP means Object-Oriented Programming. 💻 Its four major concepts are Encapsulation, Inheritance, Polymorphism, and Abstraction.";
        }

        if (q.includes("python")) {
            return "Python 🐍 is a high-level programming language known for its simple syntax. It is widely used in AI, ML, web development, automation, and data science.";
        }

        if (q.includes("dbms")) {
            return "DBMS means Database Management System. 🗄️ It is used to store, organize, manage, and retrieve data from databases.";
        }

        if (q.includes("html")) {
            return "HTML stands for HyperText Markup Language. 🌐 It is used to create the structure of web pages.";
        }

        if (q.includes("css")) {
            return "CSS stands for Cascading Style Sheets. 🎨 It is used to design and style web pages.";
        }

        if (q.includes("javascript") || q.includes("java script")) {
            return "JavaScript ⚡ is used to make websites interactive and dynamic.";
        }

        if (q.includes("java")) {
            return "Java ☕ is an object-oriented programming language commonly used for backend applications, Android development, and enterprise software.";
        }

        if (q.includes("algorithm")) {
            return "An algorithm is a step-by-step procedure used to solve a particular problem.";
        }

        if (q.includes("array")) {
            return "An array is a data structure that stores multiple values of the same type in a continuous memory location.";
        }

        if (q.includes("stack")) {
            return "A stack is a linear data structure that follows LIFO — Last In, First Out.";
        }

        if (q.includes("queue")) {
            return "A queue is a linear data structure that follows FIFO — First In, First Out.";
        }

        if (q.includes("recursion")) {
            return "Recursion is a programming technique where a function calls itself to solve a smaller version of the same problem.";
        }

        if (q.includes("operating system") || q.includes("os")) {
            return "An Operating System manages computer hardware and provides services to application programs. Examples include Windows, Linux, Android, and macOS.";
        }

        if (q.includes("ai") || q.includes("artificial intelligence")) {
            return "Artificial Intelligence is the field of creating systems that can perform tasks that normally require human intelligence. 🤖";
        }

        if (q.includes("machine learning") || q.includes("ml")) {
            return "Machine Learning is a branch of AI where computers learn patterns from data and use those patterns to make predictions or decisions.";
        }

        if (
            q.includes("hello") ||
            q.includes("hi") ||
            q.includes("hey")
        ) {
            return "Hello! 👋 I'm StudyPilot AI. Ask me a programming or study question.";
        }

        if (
            q.includes("thank")
        ) {
            return "You're welcome! 😊 Keep learning and keep building.";
        }

        // Answer for unknown questions
        return "I understand your question, but I don't have a specific answer for that topic yet. 🤖 Try asking about DSA, Python, Java, OOP, DBMS, HTML, CSS, JavaScript, algorithms, arrays, stacks, queues, or recursion.";
    }

    function escapeHTML(text) {

        const div = document.createElement("div");
        div.textContent = text;

        return div.innerHTML;
    }

});