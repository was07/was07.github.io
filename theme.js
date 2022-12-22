var dark = false;

function toggleTheme() {
    dark = !dark
    s = document.body.style
    s.setProperty('--background-color',       dark ? "#000" : "#fff")
    s.setProperty('--text-color',             dark ? "#FFF" : "#000")
    s.setProperty('--hover-background-color', dark ? "#1e1e1e" : "#f1f1f1")
}
