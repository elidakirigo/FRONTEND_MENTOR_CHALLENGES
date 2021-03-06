let question = document.querySelectorAll('.question h1'),
    p = document.querySelectorAll('.question p')

function removeClass() {
    p.forEach(element => {
        element.classList.remove('visible');
    });
}

function toggleClass(element) {
    element.parentNode.children[1].classList.toggle('visible');
}

question.forEach(element => {
    element.addEventListener('click', () => {
        removeClass(), toggleClass(element)
    })
});