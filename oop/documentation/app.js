class Player {
    constructor(login, score = 100) {
        this.login = login;
        this.score = score;
    }
    increaseScore(num = 10) {
        this.score += num;
    }
    decreaseScore(num = 10) {
        this.score -= num;
    }
}


class paidPlayer extends Player{
    constructor(login, score = 100, accBalance = 1000) {
        super(login, score);
        this.accBalance = accBalance;
    }

    increaseBalance(amount = 0) {
        this.accBalance += amount;
    }
}

const player3 = new Player('tor')
const player4 = new Player('locki', 200)









// const player1 = {
//     login: 'monster',
//     score: 100,
//     increaseScore(num = 10) {
//         this.score += num;
//     },
//     decreaseScore(num = 10) {
//         this.score -= num;
//     }
// }
//
//
// const player2 = {
//     login: 'user',
//     score: 150,
//     increaseScore(num = 10) {
//         this.score += num;
//     },
//     decreaseScore(num = 10) {
//         this.score -= num;
//     }
// }