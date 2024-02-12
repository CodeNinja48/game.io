function getcomputerchoise(){
    const choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
function play(playerchoice,computerchoice){
    return [playerchoice,computerchoice];
}
const playerchoice = 'paper'
const computerchoice = getcomputerchoise();
console.log(play(playerchoice,computerchoice));


