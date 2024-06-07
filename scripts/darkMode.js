document.addEventListener("DOMContentLoaded", () => {
    const modeButton = document.querySelector("#mode");
    const main = document.querySelector("main");

    if (modeButton && main) {
        modeButton.addEventListener("click", () => {
            if (modeButton.textContent.includes("🕶️")) {
                main.style.background = "#000";
                main.style.color = "#fff";
                modeButton.textContent = "🔆";
            } else {
                main.style.background = "#eee";
                main.style.color = "#000";
                modeButton.textContent = "🕶️";
            }
        });
    } else {
        console.error("Mode button or main element not found");
    }
});