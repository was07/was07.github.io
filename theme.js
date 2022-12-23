var dark = false;

function toggleTheme() {
    dark = !dark
    s = document.body.style
    s.setProperty('--background-color',       dark ? "#000" : "#fff")
    s.setProperty('--text-color',             dark ? "#FFF" : "#000")
    s.setProperty('--hover-background-color', dark ? "#42b3ff43" : "#42b3ff43")
}
