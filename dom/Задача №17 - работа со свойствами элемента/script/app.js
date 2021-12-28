const box = document.querySelector('#box');

//todo const
let sizes = document.getElementById('box');
let currentWidth = sizes.clientWidth;
let currentHeight = sizes.clientHeight;


box.addEventListener('click', () => {
    //todo use `${}`
    //todo remove to string
    document.getElementById('box').style.width = (Number(currentWidth) * 2).toString() + "px";
    document.getElementById('box').style.height = (Number(currentHeight) * 2).toString() + "px";
    alert(`width ${currentWidth} | height ${currentHeight}`);
});

console.log(currentWidth, currentHeight);


