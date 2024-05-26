document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();

    const lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
        const millisecondsInADay = 1000 * 60 * 60 * 24;
        const daysSinceLastVisit = Math.floor((currentDate - new Date(lastVisit)) / millisecondsInADay);

        let message;
        if (daysSinceLastVisit === 0) {
            message = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${daysSinceLastVisit} days ago.`;
        }

        document.getElementById("load").textContent = message;
    } else {

        document.getElementById("load").textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem("lastVisit", currentDate.toISOString());
});