const draggableElement = document.querySelector('#draggableElement');

draggableElement.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData("text/plain", draggableElement.id);
})

for (const dropZone of document.querySelectorAll(".drop-zone")) {
    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        const droppedElementId = e.dataTransfer.getData("text/plain");
        const droppedElement = document.getElementById(droppedElementId);
        dropZone.appendChild(droppedElement);
    })
}
