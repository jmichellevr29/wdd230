document.addEventListener('DOMContentLoaded', function () {

    const footer = document.querySelector("footer");
    const yearSpan = footer.querySelector("#year");
    const modifiedSpan = footer.querySelector("#lastModified");


    const currentYear = new Date().getFullYear();

    yearSpan.textContent = currentYear;

    const lastModified = new Date(document.lastModified);

    modifiedSpan.textContent = lastModified.toLocaleString();
});