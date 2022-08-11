// * Roll function - pega o argumento será o dado que deverá ser rodado
function rollDice(max) {
  let rollIt =  Math.floor(Math.random() * max + 1);
    return `You've roll a: ` + rollIt + ` in a d${max}`
}

// * Função atribuição - pega o dado selecionado e aplica a rolagem necessária
let result = document.getElementById('resultAnnounce')

let dice4 = document.getElementById('dice4');
let valueDice4 = function () {
  return result.innerHTML = rollDice(4);
}
dice4.addEventListener('click', valueDice4, false);

let dice6 = document.getElementById('dice6');
let valueDice6 = function () {
  return result.innerHTML = rollDice(6);
}
dice6.addEventListener('click', valueDice6, false);

let dice8 = document.getElementById('dice8');
let valueDice8 = function () {
  return result.innerHTML = rollDice(8)
}
dice8.addEventListener('click', valueDice8, false);

let dice10 = document.getElementById('dice10');
let valueDice10 = function () {
  return result.innerHTML = rollDice(10);
}
dice10.addEventListener('click', valueDice10, false);

let dice12 = document.getElementById('dice12');
let valueDice12 = function () {
  return result.innerHTML = rollDice(12);
}
dice12.addEventListener('click', valueDice12, false);

let dice20 = document.getElementById('dice20');
let valueDice20 = function () {
  return result.innerHTML = rollDice(20);
}
dice20.addEventListener('click', valueDice20, false);