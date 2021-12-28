const zoneOne = document.querySelector('#parent-left');
const zoneTwo = document.querySelector('#parent-right');
const square = document.querySelector('#child');

//todo addEventListener
zoneOne.ondragover = allowDrop;
zoneTwo.ondragover = allowDrop;

//todo ()=>  ???
function allowDrop(event) {
    event.preventDefault();
}

//todo addEventListener
square.ondragstart = drag;

//todo ()=>  ???
function drag(event) {
    event.dataTransfer.setData('id', event.target.id);
}

//todo addEventListener
zoneOne.ondrop = drop;
zoneTwo.ondrop = drop;

//todo ()=>  ???
function drop(event) {
    let itemId = event.dataTransfer.getData('id');
    event.target.append(document.getElementById(itemId));
}
