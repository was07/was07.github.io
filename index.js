function ShowHide(divId, buttonId) {
    var div = document.getElementById(divId);
    var button = document.getElementById(buttonId);
    if (div.style.display == 'none') {
        div.style.display = 'block';
        button.textContent = 'show less';
    }
    else {
        div.style.display = 'none';
        button.textContent = 'show more';
    }
}

t = "ghp_sP4ONC" + "6Iu2YknSSBC" + "KVMLDJEqlYavT1QQZ23"

function get(url) {
    return fetch(url, {
        method: 'GET',
        headers: new Headers(
            {
                'User-Agent': 'request',
                'Authorization': t,
            }
        )
    }).then(res => res.json());
}

const my_projects = document.getElementById('projects');
const projects = ['was07/cyan']



function load_project(repo) {
    get("https://api.github.com/repos/" + repo).then(add_project)
}


function add_project(data) {
    console.log(data);
    let project = document.createElement('div');
    project.className = 'box-widget';
    project.innerHTML = `
        <h2>${data.full_name}</h2>
        <p>${data.description}</p>
        <p>
            <a class="visit-repo-button" href="${data.html_url}" target="_blank"> visit repo </a>
        </p>
    `;
    my_projects.appendChild(project);
}


projects.forEach(load_project);
console.log("%cLooks like you are inspecting my page 👀",
            "font-size:50px; background:#000000; color:#009dff; padding:10px; border-radius:10px;")
