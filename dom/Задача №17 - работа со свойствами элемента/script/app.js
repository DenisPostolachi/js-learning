const box = document.querySelector('#box');
box.addEventListener('click', () => {
    let currentWidth = document.getElementById('box').style.width;
    let currentHeight = document.getElementById('box').style.height;

    currentWidth = currentWidth.replace('px', '');
    currentHeight = currentHeight.replace('px', '');

    document.getElementById('box').style.width = (parseInt(currentWidth) * 2).toString() + "px";
    document.getElementById('box').style.height = (parseInt(currentHeight) * 2).toString() + "px";

    alert(`width ${currentWidth} | height ${currentHeight}`);

});

