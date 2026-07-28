function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector("#profile img");
    
    if (html.classList.contains('light')) {
        img.setAttribute('src', './src/images/avatar-light.jpeg');
        localStorage.setItem('theme', 'light');
    } else {
        img.setAttribute('src', './src/images/avatar.jpeg');
        localStorage.setItem('theme', 'dark');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;
    const img = document.querySelector("#profile img");

    if (savedTheme === 'light') {
        html.classList.add('light');
        img.setAttribute('src', './src/images/avatar-light.jpeg');
    }
});