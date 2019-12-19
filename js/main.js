const cards = [
    {
        value: 2,
        img: "./assets/cards/hearts/2_of_hearts.png"
    },
    {
        value: 2,
        img: "./assets/cards/spades/2_of_spades.png"
    },
    {
        value: 2,
        img: "./assets/cards/clubs/2_of_clubs.png"
    },
    {
        value: 2,
        img: "./assets/cards/diamonds/2_of_diamonds.png"
    },
    {
        value: 3,
        img: "./assets/cards/hearts/3_of_hearts.png"
    },
    {
        value: 3,
        img: "./assets/cards/spades/3_of_spades.png"
    },
    {
        value: 3,
        img: "./assets/cards/clubs/3_of_clubs.png"
    },
    {
        value: 3,
        img: "./assets/cards/diamonds/3_of_diamonds.png"
    },
    {
        value: 4,
        img: "./assets/cards/hearts/4_of_hearts.png"
    },
    {
        value: 4,
        img: "./assets/cards/spades/4_of_spades.png"
    },
    {
        value: 4,
        img: "./assets/cards/clubs/4_of_clubs.png"
    },
    {
        value: 4,
        img: "./assets/cards/diamonds/4_of_diamonds.png"
    },
    {
        value: 5,
        img: "./assets/cards/hearts/5_of_hearts.png"
    },
    {
        value: 5,
        img: "./assets/cards/spades/5_of_spades.png"
    },
    {
        value: 5,
        img: "./assets/cards/clubs/5_of_clubs.png"
    },
    {
        value: 5,
        img: "./assets/cards/diamonds/5_of_diamonds.png"
    },
    {
        value: 6,
        img: "./assets/cards/hearts/6_of_hearts.png"
    },
    {
        value: 6,
        img: "./assets/cards/spades/6_of_spades.png"
    },
    {
        value: 6,
        img: "./assets/cards/clubs/6_of_clubs.png"
    },
    {
        value: 6,
        img: "./assets/cards/diamonds/6_of_diamonds.png"
    },
    {
        value: 7,
        img: "./assets/cards/hearts/7_of_hearts.png"
    },
    {
        value: 7,
        img: "./assets/cards/spades/7_of_spades.png"
    },
    {
        value: 7,
        img: "./assets/cards/clubs/7_of_clubs.png"
    },
    {
        value: 7,
        img: "./assets/cards/diamonds/7_of_diamonds.png"
    },
    {
        value: 8,
        img: "./assets/cards/hearts/8_of_hearts.png"
    },
    {
        value: 8,
        img: "./assets/cards/spades/8_of_spades.png"
    },
    {
        value: 8,
        img: "./assets/cards/clubs/8_of_clubs.png"
    },
    {
        value: 8,
        img: "./assets/cards/diamonds/8_of_diamonds.png"
    },
    {
        value: 9,
        img: "./assets/cards/hearts/9_of_hearts.png"
    },
    {
        value: 9,
        img: "./assets/cards/spades/9_of_spades.png"
    },
    {
        value: 9,
        img: "./assets/cards/clubs/9_of_clubs.png"
    },
    {
        value: 9,
        img: "./assets/cards/diamonds/9_of_diamonds.png"
    },
    {
        value: 10,
        img: "./assets/cards/hearts/10_of_hearts.png"
    },
    {
        value: 10,
        img: "./assets/cards/spades/10_of_spades.png"
    },
    {
        value: 10,
        img: "./assets/cards/clubs/10_of_clubs.png"
    },
    {
        value: 10,
        img: "./assets/cards/diamonds/10_of_diamonds.png"
    },
    {
        value: 10,
        img: "./assets/cards/hearts/jack_of_hearts.png"
    },
    {
        value: 10,
        img: "./assets/cards/spades/jack_of_spades.png"
    },
    {
        value: 10,
        img: "./assets/cards/clubs/jack_of_clubs.png"
    },
    {
        value: 10,
        img: "./assets/cards/diamonds/jack_of_diamonds.png"
    },
    {
        value: 10,
        img: "./assets/cards/hearts/queen_of_hearts.png"
    },
    {
        value: 10,
        img: "./assets/cards/spades/queen_of_spades.png"
    },
    {
        value: 10,
        img: "./assets/cards/clubs/queen_of_clubs.png"
    },
    {
        value: 10,
        img: "./assets/cards/diamonds/queen_of_diamonds.png"
    },
    {
        value: 10,
        img: "./assets/cards/hearts/king_of_hearts.png"
    },
    {
        value: 10,
        img: "./assets/cards/spades/king_of_spades.png"
    },
    {
        value: 10,
        img: "./assets/cards/clubs/king_of_clubs.png"
    },
    {
        value: 10,
        img: "./assets/cards/diamonds/king_of_diamonds.png"
    },
    {
        value: 11,
        value2: 1,
        img: "./assets/cards/hearts/ace_of_hearts.png"
    },
    {
        value: 11,
        value2: 1,
        img: "./assets/cards/spades/ace_of_spades.png"
    },
    {
        value: 11,
        value2: 1,
        img: "./assets/cards/clubs/ace_of_clubs.png"
    },
    {
        value: 11,
        value2: 1,
        img: "./assets/cards/diamonds/ace_of_diamonds.png"
    }
];
let shuffledDeck = [...cards];



/*----- app's state (variables) -----*/

let playerScore, dealerScore, playerMoney, message, playerHand, dealerHand, cardsPlayedbetFi, dealerTurn


/*----- cached element references -----*/

let dCardTwo = document.getElementById('cardfour')
let playerCards = document.querySelector('.playcards')
let dealerCards = document.querySelector('.dealcards')
let dealButton = document.getElementById('deal')
let hitButton = document.getElementById('hit')
let standButton = document.getElementById('stand')
let ddButton = document.getElementById('dd')
let betOneButton = document.getElementById('one')
let betFiveButton = document.getElementById('five')
let betTwoFiveButton = document.getElementById('twofive')
let betOneHunButton = document.getElementById('onehun')


/*----- event listeners -----*/

document.getElementById('one').addEventListener('click', betOne)
document.getElementById('five').addEventListener('click', betFive)
document.getElementById('twofive').addEventListener('click', betTwoFive)
document.getElementById('onehun').addEventListener('click', betOneHun)
document.getElementById('deal').addEventListener('click', deal)
document.getElementById('hit').addEventListener('click', hit)
document.getElementById('stand').addEventListener('click', stand)
document.getElementById('dd').addEventListener('click', doubleDown)


/*----- functions -----*/

initialize()

function initialize() {
    playerMoney = 100
    playerScore = 0
    dealerScore = 0
    playerHand = []
    dealerHand = []
    cardsPlayed = []
    pBet = 0
    pWin = 0
    bjWin = 0
    shuffle();
    message = 'Place Your Bet!'
    pDisplayScore = ''
    dDisplayScore = ''
    dealButton.disabled = true
    hitButton.disabled = true
    standButton.disabled = true
    ddButton.disabled = true
    betOneButton.disabled = false
    betFiveButton.disabled = false
    betTwoFiveButton.disabled = false
    betOneHunButton.disabled = false
    dealerTurn = false
    // dTwoCard.src = './assets/cards/back_of_card.png'
    // pCardOne.src = './assets/cards/back_of_card.png'
    // pCardTwo.src = './assets/cards/back_of_card.png'
    // dCardOne.src = './assets/cards/back_of_card.png'
    // dCardTwo.src = './assets/cards/back_of_card.png'
    render()
}

function shuffle() {
for(let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = shuffledDeck[i]
    shuffledDeck[i] = shuffledDeck[j]
    shuffledDeck[j] = temp
  }
}

// console.table(shuffledDeck)

function betOne() {
    pBet = 1
    if(1 > playerMoney) {
        message = "Not enough money to bet! Please pick a lower amount!"
        dealButton.disabled = true
    }else{
    playerMoney = playerMoney - pBet
    message = 'You bet $1. Look at the BIG Spender!<br>Press Deal to Play!'
    betOneButton.disabled = true
    betFiveButton.disabled = true
    betTwoFiveButton.disabled = true
    betOneHunButton.disabled = true
    dealButton.disabled = false 
    }  
    render();  
}

function betFive() {
    pBet = 5
    if(5 > playerMoney) {
        message = "Not enough money to bet! Please pick a lower amount!"
        dealButton.disabled = true
    }else{
    playerMoney = playerMoney - pBet
    message = 'You bet $5. Someone is feeling BALLSY today!<br>Press Deal to Play!'
    betOneButton.disabled = true
    betFiveButton.disabled = true
    betTwoFiveButton.disabled = true
    betOneHunButton.disabled = true
    dealButton.disabled = false 
    }  
    render(); 
}

function betTwoFive() {
    pBet = 25
    if(25 > playerMoney) {
        message = "Not enough money to bet! Please pick a lower amount!"
        dealButton.disabled = true
    }else{
    playerMoney = playerMoney - pBet
    message = 'You bet $25. Look at the BIG Baller!<br>Press Deal to Play!'
    betOneButton.disabled = true
    betFiveButton.disabled = true
    betTwoFiveButton.disabled = true
    betOneHunButton.disabled = true
    dealButton.disabled = false 
    }  
    render();   
}

function betOneHun() {
    pBet = 100
    if(100 > playerMoney) {
        message = "Not enough money to bet! Please pick a lower amount!"
        dealButton.disabled = true
    }else{
    playerMoney = playerMoney - pBet
    message = 'You bet $100. Your loss will help put my kids through college!<br>Press Deal to Play!'
    betOneButton.disabled = true
    betFiveButton.disabled = true
    betTwoFiveButton.disabled = true
    betOneHunButton.disabled = true
    dealButton.disabled = false 
    }  
    render();
}


function deal() {
    render();
    dDisplayScore = 0
    dealerTurn = false
    render();
    let pCardOne = shuffledDeck.shift()
    let dCardOne = shuffledDeck.shift()
    let pCardTwo = shuffledDeck.shift()
    let dCardTwo = shuffledDeck.shift()
    playerHand = [pCardOne, pCardTwo]
    dealerHand = [dCardOne, dCardTwo]
    render();
    dealButton.disabled = true
    standButton.disabled = false
    hitButton.disabled = false
    if(pCardOne.value + pCardTwo.value === 21 && dCardOne.value + dCardTwo.value != 21) {
        message = 'You hit Blackjack and win!<br>Bet Again!'
        render();
        dealerTurn = true
        bj();
    }else if(pCardOne.value + pCardTwo.value === 21 && dCardOne.value + dCardTwo.value === 21) {
        message = 'You both hit Blackjack. Draw!<br>Bet Again!'
        render();
        dealerTurn = true
        draw();
    }else if(pCardOne.value + pCardTwo.value != 21 && dCardOne.value + dCardTwo.value === 21) {
        message = 'Dealer got Blackjack. You Lose!<br>Bet Again!'
        dealerTurn = true
        lose();
    }else if(pCardOne.value + pCardTwo.value === 10 || pCardOne.value + pCardTwo.value === 11) {
        message = 'Hit, Stand, or Double Down!'
        ddButton.disabled = false
    }else{
        message = 'Hit or Stand!'
    }
    pDisplayScore = playerScore
    render();
}


function hit() {
    let pCardThree = shuffledDeck.shift()
    standButton.disabled = false
    playerHand = [...playerHand, pCardThree]
    render();
    if(playerScore >= 22 && playerHand[0].value === 11) {
        playerHand[0].value = 1
    }
    if(playerScore >= 22 && playerHand[1].value === 11) {
        playerHand[1].value = 1
    }
    if(playerScore >= 22 && playerHand[2].value === 11) {
        playerHand[2].value = 1
    }
   /*  if(playerScore > 21 && playerHand[3].value === 11) {
        playerHand[3].value = 1
    } */
    render();
    if(playerScore > 21) {
        message = 'You Busted! You Lose!<br>Bet Again!'
        render();
        lose();
    }else{
        message = 'Hit of Stand!'
    }
    pDisplayScore = playerScore
    render();
}


function doubleDown() {
    playerMoney = playerMoney - pBet
    if(pBet > playerMoney) {
        message = 'Not enough money to Double Down! Hit or Stand!'
    }
    let pCardThree = shuffledDeck.shift()
    playerHand = [...playerHand, pCardThree]
    render();
    hitButton.disabled = true
    standButton.disabled = true
    dealButton.disabled = true
    ddButton.disabled = true
    pDisplayScore = playerScore
    render();
    stand();
}

function stand() {
    dealerTurn = true
    hitButton.disabled = true
    standButton.disabled = true
    dealButton.disabled = true
    ddButton.disabled = true
    render();
    dDisplayScore = dealerScore
    if(dealerScore <= 16) {
        let dCardThree = shuffledDeck.shift()
        dealerHand = [...dealerHand, dCardThree]
        message = 'Dealer Hits!'
        render();
        dDisplayScore = dealerScore
    }
    if(dealerScore > 21 && dealerHand[0].value === 11) {
        dealerHand[0].value = 1
    }
    if(dealerScore > 21 && dealerHand[1].value === 11) {
        dealerHand[1].value = 1
    }
    if(dealerScore > 21 && dealerHand[2].value === 11) {
        dealerHand[2].value = 1
    }
    // if(dealerScore > 21 && dealerHand[3].value === 11) {
    //     dealerHand[3].value = 1
    // }
    render();
    if(dealerScore  <= 16) {
        let dCardFour = shuffledDeck.shift()
        dealerHand = [...dealerHand, dCardFour]
        message = 'Dealer Hits!'
        render();
        dDisplayScore = dealerScore
    }
    if(dealerScore  <= 16) {
        let dCardFive = shuffledDeck.shift()
        dealerHand = [...dealerHand, dCardFive]
        message = 'Dealer Hits!'
        render();
        dDisplayScore = dealerScore
    }
    
    if(dealerScore > 21) {
        message = 'Dealer Busts! You Win!<br>Bet Again!'
        win();
    }else if(playerScore > dealerScore && playerScore <= 21) {
        message = 'You Win!<br>Bet Again!'
        win();
    }else if(playerScore === dealerScore && playerScore <= 21) {
        message = 'Draw!<br>Bet Again!'
        draw();
    }else if(playerScore < dealerScore && playerScore <= 21) {
        message = "Dealer Wins! You Lose!<br>Bet Again!"
        lose();
    }else{
        message = 'Dealer Wins! You Lose!<br>Bet Again!'
        lose();
    }

   render();
}

function win() {
    playerMoney = playerMoney + (pBet * 2)
    shuffledDeck = [...shuffledDeck, ...dealerHand, ...playerHand]
    shuffle();
    render();
    betOneButton.disabled = false
    betFiveButton.disabled = false
    betTwoFiveButton.disabled = false
    betOneHunButton.disabled = false
    dealButton.disabled = true
    standButton.disabled = true
}

function lose() {
    shuffledDeck = [...shuffledDeck, ...dealerHand, ...playerHand]
    shuffle();
    render();
    if(playerMoney <= 0) {
        message = 'Go Home! You are out of money and drunk!<br>No Really GO HOME! GAME IS OVER!'
        betOneButton.disabled = true
        betFiveButton.disabled = true
        betTwoFiveButton.disabled = true
        betOneHunButton.disabled = true
        dealButton.disabled = true
        standButton.disabled = true
        ddButton.disabled = true
        hitButton.disabled = true
    }else{
        betOneButton.disabled = false
        betFiveButton.disabled = false
        betTwoFiveButton.disabled = false
        betOneHunButton.disabled = false
        dealButton.disabled = true
        standButton.disabled = true
        ddButton.disabled = true
        hitButton.disabled = true
    }
    dealerTurn = true
    render();
    dDisplayScore = dealerScore
}

function draw() {
    playerMoney = playerMoney + pBet
    shuffledDeck = [...shuffledDeck, ...dealerHand, ...playerHand]
    shuffle();
    render();
    betOneButton.disabled = false
    betFiveButton.disabled = false
    betTwoFiveButton.disabled = false
    betOneHunButton.disabled = false
    dealButton.disabled = true
    standButton.disabled = true
    ddButton.disabled = true
    dealerTurn = true
    render();
    dDisplayScore = dealerScore
}

function bj() {
    playerMoney = playerMoney + pBet + (pBet * 2)
    cardsPlayed = [...dealerHand, ...playerHand]
    shuffle();
    render();
    betOneButton.disabled = false
    betFiveButton.disabled = false
    betTwoFiveButton.disabled = false
    betOneHunButton.disabled = false
    dealButton.disabled = true
    standButton.disabled = true
    ddButton.disabled = true
    dealerTurn = true
    render();
    dDisplayScore = dealerScore
}

function render() {
    playerCards.innerHTML = ''
    playerScore = 0
    for(let i = 0; i < playerHand.length; i++) {
        let img = document.createElement('img');
        img.src = playerHand[i].img
        img.classList.add('card')
        playerCards.appendChild(img)
        playerScore += playerHand[i].value
    }

    dealerCards.innerHTML =''
    dealerScore = 0
    for(let j = 0; j < dealerHand.length; j++) {
        let img = document.createElement('img');
        if(dealerTurn === false && j === 1) {
            img.src = './assets/cards/back_of_card.png'
            img.classList.add('card')
        dealerCards.appendChild(img)
        } else {
        img.src = dealerHand[j].img
        img.classList.add('card')
        dealerCards.appendChild(img)
        dealerScore += dealerHand[j].value}
    }
    
    document.getElementById('message').innerHTML = message
    document.getElementById('playerscore').innerHTML = pDisplayScore
    document.getElementById('dealerscore').innerHTML = dDisplayScore
    document.getElementById('balance').innerHTML = playerMoney
    
}