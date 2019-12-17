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

let playerScore, dealerScore, playerMoney, playerBet, message, playerHand, dealerHand, cardsPlayed


/*----- cached element references -----*/

/* let pCardOne = document.querySelector('.cardone')
let dCardOne = document.querySelector('.cardtwo')
let pCardTwo = document.querySelector('.cardthree')
let dCardTwo = document.querySelector('.cardfour') */
let dCardTwoBack = document.querySelector('.cardfour')
/* let pCardThree = document.querySelector('.cardfive')
let pCardFour = document.querySelector('.cardsix')
let pCardFive = document.querySelector('.cardseven')
let dCardThree = document.querySelector('.cardeight')
let dCardFour = document.querySelector('.cardnine')
let dCardFive = document.querySelector('.cardten') */
let playerCards = document.querySelector('.playcards')
let dealerCards = document.querySelector('.dealcards')
let dealButton = document.getElementById('deal')
let hitButton = document.getElementById('hit')
let standButton = document.getElementById('stand')
let ddButton = document.getElementById('dd')


/*----- event listeners -----*/

/* document.getElementById('one').addEventListener('click', betOne)
document.getElementById('five').addEventListener('click', betFive)
document.getElementById('twofive').addEventListener('click', betTwoFive)
document.getElementById('onehun').addEventListener('click', betOneHun) */
document.getElementById('deal').addEventListener('click', deal)
document.getElementById('hit').addEventListener('click', hit)
document.getElementById('stand').addEventListener('click', stand)
document.getElementById('dd').addEventListener('click', doubleDown)


/*----- functions -----*/

initialize()

function initialize() {
    playerMoney = 100
    dealerScore = 0
    playerScore = 0
    playerHand = []
    dealerHand = []
    cardsPlayed = []
    shuffle();
    message = ''
    dealButton.disabled = false
    hitButton.disabled = true
    standButton.disabled = true
    ddButton.disabled = true
    // bjDrawMessage = ''
    // bjLoseMessage = ''
    // hsdMessage = ''
    // hsMessage = ''
    // dWinMessage = ''
    // pWinMessage = ''
    // dBustMessage = ''
    // pBustMessage = ''
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


/* function betOne() {
    document.getElementById('message').innerHTML = 'You bet $1. Press Deal To Play!';
    return document.getElementById('balance').innerHTML = playerMoney - 1
}
function betFive() {
    document.getElementById('message').innerHTML = 'You bet $5. Press Deal to Play!';
    return document.getElementById('balance').innerHTML = playerMoney - 5
}
function betTwoFive() {
    document.getElementById('message').innerHTML = 'You bet $25. Press Deal to Play!';
    document.getElementById('balance').innerHTML = playerMoney - 25
}
function betOneHun() {
    document.getElementById('message').innerHTML = 'You bet $100. Press Deal to Play!';
    document.getElementById('balance').innerHTML = playerMoney - 100
} */

function deal() {
    let pCardOne = shuffledDeck.shift()
    let dCardOne = shuffledDeck.shift()
    let pCardTwo = shuffledDeck.shift()
    let dCardTwo = shuffledDeck.shift()
    playerHand = [pCardOne, pCardTwo]
    dealerHand = [dCardOne, dCardTwo]
    if(pCardOne.value + pCardTwo.value === 21 && dCardOne.value + dCardTwo.value != 21) {
        message = 'You hit Blackjack and win!'
        hitButton.disabled = true
        standButton.disabled = true
    }else if(pCardOne.value + pCardTwo.value === 21 && dCardOne.value + dCardTwo.value === 21) {
        message = 'You both hit Blackjack. Draw!'
        hitButton.disabled = true
        standButton.disabled = true
    }else if(pCardOne.value + pCardTwo.value != 21 && dCardOne.value + dCardTwo.value === 21) {
        message = 'Dealer got Blackjack. You Lose!'
        hitButton.disabled = true
        standButton.disabled = true
    }else if(pCardOne.value + pCardTwo.value === 10 || pCardOne.value + pCardTwo.value === 11) {
        message = 'Hit, Stand, or Double Down!'
        hitButton.disabled = false
        standButton.disabled = false
        ddButton.disabled = false
    }else{
        message = 'Hit or Stand!'
        hitButton.disabled = false
        standButton.disabled = false
        dealButton.disabled = true
    }
    playerScore = pCardOne.value + pCardTwo.value
    render();
}


function hit() {
    let pCardThree = shuffledDeck.shift()
    playerHand = [...playerHand, pCardThree]
    if(playerScore > 21) {
        message = 'You Busted! You Lose!'
    }else{
        message = 'Hit of Stand!'
    }
    render();
}

function doubleDown() {
    let pCardThree = shuffledDeck.shift()
    playerHand = [...playerHand, pCardThree]
    hitButton.disabled = true
    standButton.disbaled = false
    dealButton.disabled = true
    ddButton = true
    render();
    stand();
}

function stand() {
    hitButton.disabled = true
    standButton.disbaled = true
    if(dealerHand[0].value + dealerHand[1] <= 16) {
        let dCardThree = shuffledDeck.shift()
        dealerHand = [...dealerHand, dCardThree]
    }
   render();
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
    console.log(playerScore)

    dealerCards.innerHTML =''
    dealerScore = 0
    for(let j = 0; j < dealerHand.length; j++) {
        let img = document.createElement('img');
        img.src = dealerHand[j].img
        img.classList.add('card')
        dealerCards.appendChild(img)
        dealerScore += dealerHand[j].value
    }

    console.log(dealerScore)
    // pCardOne.src = playerHand.length === 0 ? '' : playerHand[0].img;
    // pCardOne.src = playerHand[0] && playerHand[0].img
    // dCardOne.src = dealerHand[0] && dealerHand[0].img
    // pCardTwo.src = playerHand[1] && playerHand[1].img
    // dCardTwo.src = dealerHand[1] && dealerHand[1].img
    // dCardTwoBack.src = './assets/cards/back_of_card.png'
    // pCardThree.src = playerHand[2].img
    // pCardFour.src = playerHand[3].img
    // pCardFive.src = playerHand[4].img
    // pCardThree.src = playerHand[2]
    // pCardFour.src = playerHand[3]
    // pCardFive.src = playerHand[4]
    // document.getElementById('playerscore').innerHTML = playerHand[0].value + playerHand[1].value + playerHand[2].value
    document.getElementById('message').innerHTML = message
    // pCardThree.src = playerHand[2].img
    
}