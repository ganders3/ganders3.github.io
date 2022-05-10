var darkMode = false;

function toggleDark(tagname) {
    let element = document.getElementsByClassName(tagname);
    for (const el of element) {
        el.classList.toggle(tagname + '-dark');    
    }

}

function checkForDarkMode() {
    darkMode = !darkMode;
    
    toggleDark('body');
    toggleDark('headtext1');
    toggleDark('headtext2');
    toggleDark('footer');
    toggleDark('button');
}