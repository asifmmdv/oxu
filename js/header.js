const navContent = document.getElementById('navContent')
const searchInp = document.getElementById('searchInp')
const dropdown = document.getElementById('dropdown')

function openSearch(){
    navContent.classList.toggle('hidden')
    searchInp.classList.toggle('hidden')
}

let isOpen = false;
function openDd(){
    if (isOpen) {
        dropdown.classList.add('max-h-0');
        dropdown.classList.remove('max-h-[500px]');
    } else {
        dropdown.classList.remove('max-h-0');
        dropdown.classList.add('max-h-[500px]');
    }
    isOpen = !isOpen;
}
