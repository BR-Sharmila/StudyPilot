/* =========================================
   STUDYPILOT — NOTES
   Complete Notes System
========================================= */

const NOTES_KEY = "studypilot_notes";

/* =========================================
   GET ELEMENTS
========================================= */

const newNoteBtn = document.getElementById("newNoteBtn");
const emptyNewNoteBtn = document.getElementById("emptyNewNoteBtn");

const noteModal = document.getElementById("noteModal");
const closeNoteModalBtn = document.getElementById("closeNoteModalBtn");
const cancelNoteBtn = document.getElementById("cancelNoteBtn");

const noteForm = document.getElementById("noteForm");

const noteId = document.getElementById("noteId");
const noteTitle = document.getElementById("noteTitle");
const noteSubject = document.getElementById("noteSubject");
const noteCategory = document.getElementById("noteCategory");
const noteContent = document.getElementById("noteContent");

const notesGrid = document.getElementById("notesGrid");
const emptyNotes = document.getElementById("emptyNotes");

const searchNotes = document.getElementById("searchNotes");
const categoryFilter = document.getElementById("categoryFilter");

const totalNotes = document.getElementById("totalNotes");
const favoriteNotes = document.getElementById("favoriteNotes");
const subjectNotes = document.getElementById("subjectNotes");


/* =========================================
   LOCAL STORAGE
========================================= */

function getNotes() {

    const savedNotes = localStorage.getItem(NOTES_KEY);

    if (!savedNotes) {
        return [];
    }

    try {
        return JSON.parse(savedNotes);
    } catch (error) {
        console.error("Notes data error:", error);
        return [];
    }
}


function saveNotes(notes) {

    localStorage.setItem(
        NOTES_KEY,
        JSON.stringify(notes)
    );

}


/* =========================================
   OPEN MODAL
========================================= */

function openNoteModal() {

    if (!noteModal || !noteForm) {
        console.error("Note modal elements not found.");
        return;
    }

    noteForm.reset();

    if (noteId) {
        noteId.value = "";
    }

    noteModal.hidden = false;

    document.body.style.overflow = "hidden";

    setTimeout(function () {

        if (noteTitle) {
            noteTitle.focus();
        }

    }, 100);
}


/* =========================================
   CLOSE MODAL
========================================= */

function closeNoteModal() {

    if (!noteModal) {
        return;
    }

    noteModal.hidden = true;

    document.body.style.overflow = "";

    if (noteForm) {
        noteForm.reset();
    }

    if (noteId) {
        noteId.value = "";
    }
}


/* =========================================
   SAVE NOTE
========================================= */

if (noteForm) {

    noteForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const title =
                noteTitle.value.trim();

            const subject =
                noteSubject.value.trim();

            const category =
                noteCategory.value;

            const content =
                noteContent.value.trim();


            if (title === "") {

                alert("Please enter a note title.");

                noteTitle.focus();

                return;
            }


            if (content === "") {

                alert("Please write something in your note.");

                noteContent.focus();

                return;
            }


            let notes = getNotes();


            /* EDIT NOTE */

            if (noteId.value !== "") {

                const index =
                    notes.findIndex(
                        function (note) {
                            return note.id === noteId.value;
                        }
                    );


                if (index !== -1) {

                    notes[index].title =
                        title;

                    notes[index].subject =
                        subject;

                    notes[index].category =
                        category;

                    notes[index].content =
                        content;

                    notes[index].updatedAt =
                        new Date().toISOString();

                }

            }


            /* CREATE NOTE */

            else {

                const newNote = {

                    id:
                        Date.now().toString(),

                    title:
                        title,

                    subject:
                        subject,

                    category:
                        category,

                    content:
                        content,

                    favorite:
                        false,

                    createdAt:
                        new Date().toISOString(),

                    updatedAt:
                        new Date().toISOString()

                };


                notes.unshift(newNote);

            }


            saveNotes(notes);

            closeNoteModal();

            renderNotes();

            alert("Note saved successfully!");

        }
    );

}


/* =========================================
   RENDER NOTES
========================================= */

function renderNotes() {

    if (!notesGrid) {
        return;
    }

    const notes = getNotes();

    const search =
        searchNotes
            ? searchNotes.value
                .trim()
                .toLowerCase()
            : "";

    const category =
        categoryFilter
            ? categoryFilter.value
            : "all";


    let visibleNotes =
        notes.filter(
            function (note) {

                const matchesSearch =
                    note.title
                        .toLowerCase()
                        .includes(search)
                    ||
                    note.subject
                        .toLowerCase()
                        .includes(search)
                    ||
                    note.content
                        .toLowerCase()
                        .includes(search);


                const matchesCategory =
                    category === "all"
                    ||
                    note.category === category;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            }
        );


    notesGrid.innerHTML = "";


    /* EMPTY */

    if (visibleNotes.length === 0) {

        if (emptyNotes) {
            emptyNotes.style.display = "flex";
        }

    } else {

        if (emptyNotes) {
            emptyNotes.style.display = "none";
        }

    }


    /* CREATE NOTE CARDS */

    visibleNotes.forEach(
        function (note) {

            const card =
                document.createElement("article");

            card.className = "note-card";


            card.innerHTML = `

                <div class="note-card-top">

                    <span class="note-category">
                        ${escapeHTML(note.category)}
                    </span>

                    <button
                        type="button"
                        class="favorite-button"
                        data-action="favorite"
                        data-id="${note.id}"
                        title="Favorite">

                        ${note.favorite ? "★" : "☆"}

                    </button>

                </div>


                <h3>
                    ${escapeHTML(note.title)}
                </h3>


                ${
                    note.subject
                    ?
                    `<span class="note-subject">
                        ${escapeHTML(note.subject)}
                    </span>`
                    :
                    ""
                }


                <p class="note-preview">
                    ${escapeHTML(note.content)}
                </p>


                <div class="note-card-bottom">

                    <small>
                        ${formatDate(note.updatedAt)}
                    </small>


                    <div class="note-actions">

                        <button
                            type="button"
                            data-action="edit"
                            data-id="${note.id}">
                            Edit
                        </button>

                        <button
                            type="button"
                            class="delete-note"
                            data-action="delete"
                            data-id="${note.id}">
                            Delete
                        </button>

                    </div>

                </div>

            `;


            notesGrid.appendChild(card);

        }
    );


    updateNoteStats(notes);

}


/* =========================================
   UPDATE STATISTICS
========================================= */

function updateNoteStats(notes) {

    if (totalNotes) {

        totalNotes.textContent =
            notes.length;

    }


    if (favoriteNotes) {

        favoriteNotes.textContent =
            notes.filter(
                function (note) {
                    return note.favorite;
                }
            ).length;

    }


    if (subjectNotes) {

        const subjects =
            new Set(
                notes
                    .map(
                        function (note) {
                            return note.subject;
                        }
                    )
                    .filter(Boolean)
            );

        subjectNotes.textContent =
            subjects.size;

    }

}


/* =========================================
   EDIT / DELETE / FAVORITE
========================================= */

if (notesGrid) {

    notesGrid.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    "[data-action]"
                );


            if (!button) {
                return;
            }


            const action =
                button.dataset.action;

            const id =
                button.dataset.id;


            let notes =
                getNotes();


            /* FAVORITE */

            if (action === "favorite") {

                const note =
                    notes.find(
                        function (item) {
                            return item.id === id;
                        }
                    );


                if (note) {

                    note.favorite =
                        !note.favorite;

                    saveNotes(notes);

                    renderNotes();

                }

                return;
            }


            /* EDIT */

            if (action === "edit") {

                const note =
                    notes.find(
                        function (item) {
                            return item.id === id;
                        }
                    );


                if (!note) {
                    return;
                }


                noteId.value =
                    note.id;

                noteTitle.value =
                    note.title;

                noteSubject.value =
                    note.subject || "";

                noteCategory.value =
                    note.category || "General";

                noteContent.value =
                    note.content;


                noteModal.hidden =
                    false;

                document.body.style.overflow =
                    "hidden";

                noteTitle.focus();

                return;
            }


            /* DELETE */

            if (action === "delete") {

                const confirmed =
                    confirm(
                        "Delete this note?"
                    );


                if (!confirmed) {
                    return;
                }


                notes =
                    notes.filter(
                        function (note) {
                            return note.id !== id;
                        }
                    );


                saveNotes(notes);

                renderNotes();

            }

        }
    );

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
   DATE FORMAT
========================================= */

function formatDate(dateString) {

    if (!dateString) {
        return "";
    }


    const date =
        new Date(dateString);


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================
   BUTTONS
========================================= */

if (newNoteBtn) {

    newNoteBtn.addEventListener(
        "click",
        function () {
            openNoteModal();
        }
    );

}


if (emptyNewNoteBtn) {

    emptyNewNoteBtn.addEventListener(
        "click",
        function () {
            openNoteModal();
        }
    );

}


if (closeNoteModalBtn) {

    closeNoteModalBtn.addEventListener(
        "click",
        function () {
            closeNoteModal();
        }
    );

}


if (cancelNoteBtn) {

    cancelNoteBtn.addEventListener(
        "click",
        function () {
            closeNoteModal();
        }
    );

}


/* =========================================
   SEARCH
========================================= */

if (searchNotes) {

    searchNotes.addEventListener(
        "input",
        function () {
            renderNotes();
        }
    );

}


/* =========================================
   CATEGORY FILTER
========================================= */

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        function () {
            renderNotes();
        }
    );

}


/* =========================================
   CLOSE WHEN CLICKING OUTSIDE
========================================= */

if (noteModal) {

    noteModal.addEventListener(
        "click",
        function (event) {

            if (event.target === noteModal) {

                closeNoteModal();

            }

        }
    );

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            noteModal &&
            !noteModal.hidden
        ) {

            closeNoteModal();

        }

    }
);


/* =========================================
   INITIAL LOAD
========================================= */

renderNotes();

console.log(
    "StudyPilot Notes loaded successfully."
);