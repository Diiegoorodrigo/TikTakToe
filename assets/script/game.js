



let board = ['', '', '', '', '', '', '', '', '', ]

let playerBeggin = Math.random()
    if(playerBeggin < 0.5) {
        playerBeggin = 0;
    } else {
        playerBeggin=1
    }

let playerTime = playerBeggin;
let symbols = ['o','x']
let gameOver = false;
const play = document.querySelector('.playerTime')
let winner
let count = []




function handleMove(position){

    if(gameOver){
        return
    }

     if(board[position]=='') {

    board[position] = symbols[playerTime]
    

    gameOver = isWin()

     if(gameOver == false) {



        if(playerTime==0) {
            playerTime = 1;
            play.innerHTML = `<p>é o turno do ${p2}</p>`
            winner = p2
            count.push('.')
         } else {
            playerTime = 0;
            play.innerHTML = `<p>é o turno do ${p1}</p>`
            winner = p1
            count.push('.')
            }
        if(count.length>=9)    
        play.innerHTML = `<p>O jogo empatou</p>`

         }
     }

    return gameOver
}


function isWin(){

    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (let i =0; i < winStates.length; i++) {

        let seq = winStates[i]

        let pos0 = seq[0]
        let pos1 = seq[1]
        let pos2 = seq[2]


        if(board[pos0] == board[pos1] && board[pos0] == board[pos2] && board[pos0] != '') {
            return true
        }

    }

    return false;

}

