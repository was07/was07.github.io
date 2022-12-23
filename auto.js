function dropdownFunc() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches(".dropper")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

function get(url) {
    return fetch(url, {
        method: "GET",
        headers: new Headers({
            "User-Agent": "request",
            Authorization: "ghp_sP4ONC" + "6Iu2YknSSBC" + "KVMLDJEqlYavT1QQZ23",
        }),
    }).then((res) => res.json());
}

const topbarFactDiv = document.getElementById("topbar-fact")
const projectsContainer = document.getElementById("pc");
const usesContainer = document.getElementById("uc");
const factOptions = [
    "The logo is a less-than sign",
    "The theme is based on #42b3ff",
    "My real name is Walid",
    "I'm from Asia",
    "I'm from Dhaka, Bangladesh",
    "My timezone is GMT+6",
    "I use Visual Studio Code",
    "My mostly use Python",
    "I like to play chess"
]
const projects = [
    {
        title: "Cyan",
        github: "was07/cyan",
    }
];
const uses = [
    ["Windows OS", "Just the Operating System I'm fimiliar with, they don't matter much"],
    [
        "VSCode",
        "Fevourite extensions: Error Lens, Lukin Theme, Todo Tree and Live Server",
    ],
    ["Microsoft Edge", "To efficiently use my ram and increase productivity"],
    ["Metarial Icons", "For VSCode, Github and more"],
    ["PyCharm", "For python projects, but using it a lot less recently"],
];

function setRandomFact() {
    const randomFact = factOptions[Math.floor(Math.random() * factOptions.length)];
    console.log(topbarFactDiv.innerHTML)
    topbarFactDiv.innerHTML = randomFact
}

function loadProject(project) {
    get("https://api.github.com/repos/" + project.github).then((data) => {
        addProject(project, data);
    });
}

function addProject(project, data) {
    div = document.createElement("div");
    div.className = "project";
    div.href = data.html_url;
    div.innerHTML = `
    <span class="title">
        ${project.title}
    </span>
    <div class="description">
        ${data.description}
    </div>
    <div class="bar">
        <span class="bar-count">
            <i class="fa-solid fa-star"></i><span>${data.stargazers_count}</span>
        </span>
        <span class="bar-count">
            <i class="fa-sharp fa-solid fa-code-fork"></i></i><span>${data.forks_count}</span>
        </span>
        <span class="bar-visit-repo">
            <a href="${data.html_url}">visit repo<a>
        </span>
    </div>
    `;
    projectsContainer.appendChild(div);
}

function addUse(lst) {
    div = document.createElement("div");
    div.className = "use";
    div.innerHTML = `
    <i class="fas fa-terminal"></i>
    <div class="right">
        <div class="title">
            ${lst[0]}
        </div>
        <div class="text">
            ${lst[1]}
        </div>
    </div>
    `;
    usesContainer.appendChild(div);
}

setRandomFact()
projects.forEach(loadProject);
uses.forEach(addUse);
