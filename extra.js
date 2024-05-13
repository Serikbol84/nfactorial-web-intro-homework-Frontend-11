const dropButton = document.getElementById('drop');
const hideButton = document.getElementById('hide');
const menuList = document.getElementById('menu');

dropButton.addEventListener('click', () => {
    menu.style.display = 'block';
    dropButton.style.display = 'none';
    hideButton.style.display = 'block';
});

hideButton.addEventListener('click', () => {
    menu.style.display = 'none';
    hideButton.style.display = 'none';
    dropButton.style.display = 'block';
});