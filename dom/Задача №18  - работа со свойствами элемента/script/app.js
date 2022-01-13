let player = document.querySelector('#player');

const playerControl = {
    playerLeft: 0,
    playerTop: 0,

    playerMoving(e) {
        switch (e.keyCode) {
            case 39:
                playerControl.playerLeft += 8;
                player.style.left = playerControl.playerLeft + 'px';
                if (playerControl.playerLeft >= 450) {
                    playerControl.playerLeft = 442
                }
                break;
            case 37:
                playerControl.playerLeft -= 8;
                player.style.left = playerControl.playerLeft + 'px';
                if (playerControl.playerLeft <= 0) {
                    playerControl.playerLeft = 8
                }
                break;
            case 40:
                playerControl.playerTop += 8;
                player.style.top = playerControl.playerTop + 'px';
                if (playerControl.playerTop >= 450) {
                    playerControl.playerTop = 442
                }
                break;
            case 38:
                playerControl.playerTop -= 8;
                player.style.top = playerControl.playerTop + 'px';
                if (playerControl.playerTop <= 0) {
                    playerControl.playerTop = 8
                }
                break;
        }
    },


}


document.addEventListener('keydown', (e) => {
    playerControl.playerMoving(e);
})
