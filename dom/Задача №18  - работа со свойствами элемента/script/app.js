let player = document.querySelector('#player');
let container = document.querySelector('#container');


let playerLeft = 0;
let playerTop = 0;

// todo переписать через объект, создать объект с функциями с
// todo ключами соответствующими названию клавиш и вызывать при нажатии, пример methods[e.key]()

// todo переписать через свич кейс и рассказать почему это оптимальней чем if/ if с return
const playerMoving = (e) => {
    //todo всегда использовать ===
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

//todo
document.onkeydown = playerMoving;
