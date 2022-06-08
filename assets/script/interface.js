document.addEventListener('click', (e)=> {

    const element =  e.target


    

    if(element.classList.contains('start')){
        
        checkPlayers()
        if(playerTime==0) {
            play.innerHTML = `<p>${p1} inicia o jogo</p>`
        } else {
            play.innerHTML = `<p>${p2} inicia o jogo</p>`
        }

    }


})

let p1
let p2

function checkPlayers(){

    let playerOne = document.querySelector('.p1')
    let playerTwo = document.querySelector('.p2')
    let playerContent = document.querySelector('.players')
    let gameContent = document.querySelector('.game')
    let buttons = document.querySelector('.buttons')
    let play =  document.querySelector('.playerTime')


    if(!playerOne.value) return alert('insira o nome do player um')
    if(!playerTwo.value) return alert('insira o nome do player dois')

    if(playerOne.value && playerTwo.value ) {

        playerContent.style.display = 'none'
        gameContent.style.display = 'grid'
         p1 = playerOne.value
         p2 = playerTwo.value
         play.style.display = 'block'
         buttons.style.display = 'block'
        
    }
    
}



document.addEventListener('DOMContentLoaded',()=>{

    // comnado para verificar se o conteudo já foi carreagado

    let squares = document.querySelectorAll('.square');
    
    squares.forEach((square)=>{

        square.addEventListener('click', handleClick)

        // evento para chamar a função handleClick

    })

})

function handleClick(event) {

    let square = event.target
    let position = square.id

    // a função handleClick irá mostrar qual o quadrado que está sendo clicado, e o id do quadrado

    if(handleMove(position)) {

        setTimeout(() => {
            updateSquares()
           return play.innerHTML = `<p>O jogador ganhou ${winner}</p>`
        }, 10);
        
    }
    updateSquares()

    // a função updateSquares irá verificar se o quadrado está vazio, se o quadrado estiver vazio logo ele será atualizado com  o simbolo do player
    // handleMove é a função que identifica a vez do jogador e sendo a vez do jogar 'n' ele clicará no quadrado desejado e colocará o valor x ou o
}

function updateSquares(){

    let squares = document.querySelectorAll('.square')

    squares.forEach((square)=>{
        
        let position = square.id
        let symbol = board[position]
        
        if(symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })

}

function back () {

    let playerOne = document.querySelector('.p1')
    let playerTwo = document.querySelector('.p2')
    let playerContent = document.querySelector('.players')
    let gameContent = document.querySelector('.game')
    let buttons = document.querySelector('.buttons')
    let play =  document.querySelector('.playerTime')

    playerContent.style.display = 'flex'
    gameContent.style.display = 'none'
     play.style.display = 'none'
     buttons.style.display = 'none'

}

function reset(){

    gameOver = false
    board = ["", "", "", "", "", "", "", "", ""]
    let squares = document.querySelectorAll(".square");

    if(playerTime==0) {
        play.innerHTML = `<p>${p1} inicia o jogo</p>`
    } else {
        play.innerHTML = `<p>${p2} inicia o jogo</p>`
    }
    
    for (let i of squares ) {
        i.innerHTML="";
    }

}