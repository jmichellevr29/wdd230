const baseURL = "https://jmichellevr29.github.io/wdd230";
const linksURL = "https://jmichellevr29.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

getLinks();

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    const container = document.getElementById('links-container');


    weeks.forEach(week => {
        week.links.forEach(link => {
            const listItem = document.createElement('li');

            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = `${week.week}: ${link.title}`;
            anchor.target = '_blank';

            listItem.appendChild(anchor);
            container.appendChild(listItem);
        });
    });
}

getLinks();
