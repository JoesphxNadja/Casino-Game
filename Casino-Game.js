//    WELCOME TO BLACKJACK!

const numberCards = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const faceCards = ['Jack', 'Queen', 'King', 'Ace'];

let myWallet = 100;


function greeting(myWallet) {
    if (confirm("Do you want to play some Blackjack?")) {
        prompt(`great! You have $${myWallet} in your wallet.\nHow much would you like to bet?`);
  } else {
        prompt("I'm sorry to hear that :(");
  }
}

console.log(greeting(myWallet)); 