// =========================================
// STUDYPILOT — RESET ALL SAVED DATA
// =========================================

function resetStudyPilot() {

    const confirmReset = confirm(
        "⚠️ This will delete ALL saved StudyPilot data.\n\n" +
        "• Planner tasks\n" +
        "• Exams\n" +
        "• Notes\n" +
        "• Quiz progress\n" +
        "• Dashboard data\n\n" +
        "Do you want to continue?"
    );

    if (!confirmReset) {
        return;
    }

    // Clear all StudyPilot localStorage data
    localStorage.clear();

    // Clear session data too
    sessionStorage.clear();

    alert(
        "✅ StudyPilot has been reset successfully!\n\n" +
        "You can now start fresh."
    );

    // Reload application
    window.location.reload();
}
