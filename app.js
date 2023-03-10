const king = document.querySelector('.chess-piece');
const squares = document.querySelectorAll('.square');
const infoDisplay = document.querySelector('#info');

king.addEventListener('drag', dragging);
king.addEventListener('dragstart', dragStart);

squares.forEach(square => {
    square.addEventListener('dragover', dragOver);
    square.addEventListener('dragenter', dragEnter);
    square.addEventListener('dragleave', dragLeave);
    square.addEventListener('drop', dragDrop);
    square.addEventListener('dragend', dragEnd);
});

let beingDragged;

function dragStart(e) {
    beingDragged = e.target;
    console.log(beingDragged);
}

function dragDrop(e) {
    e.target.append(beingDragged);
    console.log(e.target);
    e.target.classList.remove('highlight');
}

function dragOver(e) {
    e.preventDefault();
}

function dragging() {
    infoDisplay.textContent = 'Haciendo drag and drop de ' + beingDragged.id;
}

function dragEnter(e) {
    e.target.classList.add('highlight');
}

function dragLeave(e) {
    e.target.classList.remove('highlight');
}

function dragEnd(e) {
    e.target.classList.add('target');
    setTimeout(() => e.target.classList.remove('target'), 100);
    infoDisplay.textContent = '';
}
