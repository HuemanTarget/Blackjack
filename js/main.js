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

let pCardOne = document.querySelector('.cardone')
let dCardOne = document.querySelector('.cardtwo')
let pCardTwo = document.querySelector('.cardthree')
let dCardTwo = document.querySelector('.cardfour')
let pCardThree = document.querySelector('.cardfive')
let pCardFour = document.querySelector('.cardsix')
let pCardFive = document.querySelector('.cardseven')
let dCardThree = document.querySelector('.cardeight')
let dCardFour = document.querySelector('.cardnine')
let dCardFive = document.querySelector('.cardten')


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
    pCardOne.img =
    pCardTwo.img =
    dCardOne.img =
    dCardTwo.img =
    playerHand = []
    dealerHand = []
    cardsPlayed = []
    shuffle();
    message = ''
    bjDrawMessage = ''
    bjLoseMessage = ''
    hsdMessage = ''
    hsMessage = ''
    render();
}

function shuffle() {
for(let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = shuffledDeck[i]
    shuffledDeck[i] = shuffledDeck[j]
    shuffledDeck[j] = temp
  }
}

console.table(shuffledDeck)

/* function bet() {
    if (playerBet > playerMoney) {
        return 'You do not have enough money to play!'
    }

} */

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
    console.log(pCardOne.value, pCardTwo.value)
    if(pCardOne.value + pCardTwo.value === 21 && dCardOne.value + dCardTwo.value != 21) {
        message = 'You hit Blackjack and win!'
    }else if(pCardOne.value + pCardTwo.value === 21 && dCardOne.value + dCardTwo.value === 21) {
        message = 'You both hit Blackjack. Draw!'
    }else if(pCardOne.value + pCardTwo.value != 21 && dCardOne.value + dCardTwo.value === 21) {
        message = 'Dealer got Blackjack. You Lose!'
    }else if(pCardOne.value + pCardTwo.value === 10 || pCardOne.value + pCardTwo.value === 11) {
        message = 'Hit, Stand, or Double Down!'
    }else{
        message = 'Hit or Stand!'
    }
    render();
}


// function hit() {
//     let pCardThree = shuffledDeck.shift().img
//     let pCardFour = shuffledDeck.shift().img
//     let pCardFive = shuffledDeck.shift().img
//     playerHand = [pCardOne, pCardTwo, pCardThree, pCardFour, pCardFive]
//     /* document.querySelector('.cardfive').src = shuffledDeck[4].img
//     if(shuffledDeck[0].value + shuffledDeck[2].value + shuffledDeck[4].value > 21) {
//         document.getElementById('playerscore').innerHTML = shuffledDeck[0].value + shuffledDeck[2].value + shuffledDeck[4].value
//         return document.getElementById('message').innerHTML = 'You Busted! You Lose!'
//     }else{
//         document.getElementById('playerscore').innerHTML = shuffledDeck[0].value + shuffledDeck[2].value + shuffledDeck[4].value
//         return document.getElementById('message').innerHTML = 'Hit or Stand!'
//     }*/
// }



/* function stand() {
    document.querySelector('.cardfour').src = shuffledDeck[3].img
    document.getElementById('dealerscore').innerHTML = shuffledDeck[1].value + shuffledDeck[3].value
    if(shuffledDeck[1].value + shuffledDeck[3].value <= 16) {
        document.querySelector('.cardeight').src = shuffledDeck[5].img 
        document.getElementById('dealerscore').innerHTML = shuffledDeck[1].value + shuffledDeck[3].value + shuffledDeck[5].img
        document.querySelector('.cardnine').src = shuffledDeck[5].img 
        document.getElementById('dealerscore').innerHTML = shuffledDeck[1].value + shuffledDeck[3].value + shuffledDeck[5].img
} */

function doubleDown() {
    alert('button Double Down working')
}

function render() {
    // pCardOne.src = playerHand.length === 0 ? '' : playerHand[0].img;
    pCardOne.src = playerHand[0].img
    dCardOne.src = dealerHand[0].img
    pCardTwo.src = playerHand[1].img
    dCardTwo.src = dealerHand[1].img
    /* pCardThree.src = playerHand[2]
    pCardFour.src = playerHand[3]
    pCardFive.src = playerHand[4] */
    document.getElementById('message').innerHTML = message
    // document.getElementById('playerscore').innerHTML = shuffledDeck[0].value + shuffledDeck[2].value
}