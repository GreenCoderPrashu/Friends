function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const welcome = document.getElementById('welcome')
const memories = document.getElementById('memories')
function next() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('memories').style.display = 'block';
}