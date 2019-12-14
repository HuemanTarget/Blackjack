/*----- constants -----*/
const deck = {
    twohearts: {
        value: 2,
        img: "./assets/cards/hearts/2_of_hearts.png"
    },
    twospades: {
        value: 2,
        img: "./assets/cards/hearts/2_of_spades.png"
    },
    twoclubs: {
        value: 2,
        img: "./assets/cards/hearts/2_of_clubs.png"
    },
    twodiamonds: {
        value: 2,
        img: "./assets/cards/hearts/2_of_diamonds.png"
    },
    threehearts: {
        value: 3,
        img: "./assets/cards/hearts/3_of_hearts.png"
    },
    threespades: {
        value: 3,
        img: "./assets/cards/hearts/3_of_spades.png"
    },
    threeclubs: {
        value: 3,
        img: "./assets/cards/hearts/3_of_clubs.png"
    },
    threediamonds: {
        value: 3,
        img: "./assets/cards/hearts/3_of_diamonds.png"
    },
    fourhearts: {
        value: 4,
        img: "./assets/cards/hearts/4_of_hearts.png"
    },
    fourspades: {
        value: 4,
        img: "./assets/cards/hearts/4_of_spades.png"
    },
    fourclubs: {
        value: 4,
        img: "./assets/cards/hearts/4_of_clubs.png"
    },
    fourdiamonds: {
        value: 4,
        img: "./assets/cards/hearts/4_of_diamonds.png"
    },
    fivehearts: {
        value: 5,
        img: "./assets/cards/hearts/5_of_hearts.png"
    },
    fivespades: {
        value: 5,
        img: "./assets/cards/hearts/5_of_spades.png"
    },
    fiveclubs: {
        value: 5,
        img: "./assets/cards/hearts/5_of_clubs.png"
    },
    fivediamonds: {
        value: 5,
        img: "./assets/cards/hearts/5_of_diamonds.png"
    },
    sixhearts: {
        value: 6,
        img: "./assets/cards/hearts/6_of_hearts.png"
    },
    sixspades: {
        value: 6,
        img: "./assets/cards/hearts/6_of_spades.png"
    },
    sixclubs: {
        value: 6,
        img: "./assets/cards/hearts/6_of_clubs.png"
    },
    sixdiamonds: {
        value: 6,
        img: "./assets/cards/hearts/6_of_diamonds.png"
    },
    sevenhearts: {
        value: 7,
        img: "./assets/cards/hearts/7_of_hearts.png"
    },
    sevenspades: {
        value: 7,
        img: "./assets/cards/hearts/7_of_spades.png"
    },
    sevenclubs: {
        value: 7,
        img: "./assets/cards/hearts/7_of_clubs.png"
    },
    sevendiamonds: {
        value: 7,
        img: "./assets/cards/hearts/7_of_diamonds.png"
    },
    eighthearts: {
        value: 8,
        img: "./assets/cards/hearts/8_of_hearts.png"
    },
    eightspades: {
        value: 8,
        img: "./assets/cards/hearts/8_of_spades.png"
    },
    eightclubs: {
        value: 8,
        img: "./assets/cards/hearts/8_of_clubs.png"
    },
    eightdiamonds: {
        value: 8,
        img: "./assets/cards/hearts/8_of_diamonds.png"
    },
    ninehearts: {
        value: 9,
        img: "./assets/cards/hearts/9_of_hearts.png"
    },
    ninespades: {
        value: 9,
        img: "./assets/cards/hearts/9_of_spades.png"
    },
    nineclubs: {
        value: 9,
        img: "./assets/cards/hearts/9_of_clubs.png"
    },
    ninediamonds: {
        value: 9,
        img: "./assets/cards/hearts/9_of_diamonds.png"
    },
    tenhearts: {
        value: 10,
        img: "./assets/cards/hearts/10_of_hearts.png"
    },
    tenspades: {
        value: 10,
        img: "./assets/cards/hearts/10_of_spades.png"
    },
    tenclubs: {
        value: 10,
        img: "./assets/cards/hearts/10_of_clubs.png"
    },
    tendiamonds: {
        value: 10,
        img: "./assets/cards/hearts/10_of_diamonds.png"
    },
    jackhearts: {
        value: 10,
        img: "./assets/cards/hearts/jack_of_hearts.png"
    },
    jackspades: {
        value: 10,
        img: "./assets/cards/hearts/jack_of_spades.png"
    },
    jackclubs: {
        value: 10,
        img: "./assets/cards/hearts/jack_of_clubs.png"
    },
    jackdiamonds: {
        value: 10,
        img: "./assets/cards/hearts/jack_of_diamonds.png"
    },
    queenhearts: {
        value: 10,
        img: "./assets/cards/hearts/queen_of_hearts.png"
    },
    queenspades: {
        value: 10,
        img: "./assets/cards/hearts/queen_of_spades.png"
    },
    queenclubs: {
        value: 10,
        img: "./assets/cards/hearts/queen_of_clubs.png"
    },
    queendiamonds: {
        value: 10,
        img: "./assets/cards/hearts/queen_of_diamonds.png"
    },
    kinghearts: {
        value: 10,
        img: "./assets/cards/hearts/king_of_hearts.png"
    },
    kingspades: {
        value: 10,
        img: "./assets/cards/hearts/king_of_spades.png"
    },
    kingclubs: {
        value: 10,
        img: "./assets/cards/hearts/king_of_clubs.png"
    },
    kingdiamonds: {
        value: 10,
        img: "./assets/cards/hearts/king_of_diamonds.png"
    },
    acehearts: {
        value: 11,
        value2: 1,
        img: "./assets/cards/hearts/ace_of_hearts.png"
    },
    acespades: {
        value: 11,
        value2: 1,
        img: "./assets/cards/hearts/ace_of_spades.png"
    },
    aceclubs: {
        value: 11,
        value2: 1,
        img: "./assets/cards/hearts/ace_of_clubs.png"
    },
    acediamonds: {
        value: 11,
        value2: 1
        img: "./assets/cards/hearts/ace_of_diamonds.png"
    },
}


/*----- app's state (variables) -----*/

let playerBalance = 


/*----- cached element references -----*/




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

/*initialize()
   
    function initialize() {
    scores = {
    p: 0,
    c: 0,
    t: 0,
  }
  
  results = {
    p: 'r',
    c: 'r',
  }
  winner = null
  render()
} */

function betOne() {
    alert('button One working')
}

function betFive() {
    alert('button Five working')
}

function betTwoFive() {
    alert('button Two Five working')
}

function betOneHun() {
    alert('button One Hun working')
}

function deal() {
    alert('button deal working')
}

function hit() {
    alert('button hit working')
}

function stand() {
    alert('button stand working')
}

function doubleDown() {
    alert('button Double Down working')
}