let player = document.querySelector('#player');
let container = document.querySelector('#container');


let playerLeft = 0;
let playerTop = 0;


const playerMoving = (e) => {
    if (e.keyCode == 39) {
        playerLeft += 8;
        player.style.left = playerLeft + 'px';
        if (playerLeft >= 450) {
            playerLeft = 442
        }
    }
    if (e.keyCode == 37) {
        playerLeft -= 8;
        player.style.left = playerLeft + 'px';
        if (playerLeft <= 0) {
            playerLeft = 8
        }
    }
    if (e.keyCode == 40) {
        playerTop += 8;
        player.style.top = playerTop + 'px';
        if (playerTop >= 450) {
            playerTop = 442
        }
    }
    if (e.keyCode == 38) {
        playerTop -= 8;
        player.style.top = playerTop + 'px';
        if (playerTop <= 0) {
            playerTop = 8
        }
    }
}

document.onkeydown = playerMoving;