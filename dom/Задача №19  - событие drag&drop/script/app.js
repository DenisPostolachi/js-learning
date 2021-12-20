const zoneOne = document.querySelector('#parent-left');
const zoneTwo = document.querySelector('#parent-right');
const square = document.querySelector('#child');


zoneOne.ondragover = allowDrop;
zoneTwo.ondragover = allowDrop;

function allowDrop(event) {
    event.preventDefault();
}

square.ondragstart = drag;

function drag(event) {
    event.dataTransfer.setData('id', event.target.id);
}


zoneOne.ondrop = drop;
zoneTwo.ondrop = drop;

function drop(event) {
    let itemId = event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
}