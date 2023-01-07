var dark = false;

function toggleTheme() {
    console.log('yeah')
    dark = !dark
    s = document.body.style
    s.setProperty('--background-color',       dark ? "#111" : "#eee")
    s.setProperty('--background-color-2',     dark ? "#000" : "#fff")
    s.setProperty('--background-color-light', dark ? "#222" : "#ddd")
    s.setProperty('--text-color',             dark ? "#FFF" : "#000")
    s.setProperty('--hover-background-color', dark ? "#42b3ff43" : "#42b3ff43")
}


toggleTheme()