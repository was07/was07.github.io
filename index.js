console.log("Connected");
var dark = true;

function toggleTheme() {
    dark = !dark
    s = document.body.style
    s.setProperty('--background-color', dark ? "#000" : "#fff")
    s.setProperty('--text-color', dark ? "#FFF" : "#000")
    s.setProperty('--hover-background-color', dark ? "#1e1e1e" : "#f1f1f1")
}

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

const projectsContainer = document.getElementById("pc");
const usesContainer = document.getElementById("uc");
const projects = [
    {
        title: "Cyan",
        github: "was07/cyan",
    }
];
const uses = [
    ["Windows OS", "Just an OS"],
    [
        "VSCode",
        "Fevourite extensions: Error Lens, Lukin Theme, Todo Tree, Live Server, Material Icon Theme",
    ],
    ["Microsoft Edge", "To efficiently use my ram and increase productivity"],
    ["Metarial Icons", "For VSCode, Github and more"],
    ["PyCharm", "For python projects, but using it a lot less recently"],
];

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

projects.forEach(loadProject);
uses.forEach(addUse);
