const box = document.querySelector('#box');


let sizes = document.getElementById('box');
let currentWidth = sizes.clientWidth;
let currentHeight = sizes.clientHeight;


box.addEventListener('click', () => {
    document.getElementById('box').style.width = (parseInt(currentWidth) * 2).toString() + "px";
    document.getElementById('box').style.height = (parseInt(currentHeight) * 2).toString() + "px";
    alert(`width ${currentWidth} | height ${currentHeight}`);
});

console.log(currentWidth, currentHeight);


