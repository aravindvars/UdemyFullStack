let randomNumber1 = Math.round(Math.random() * 5) + 1;
console.log(randomNumber1);

let randomNumber2 = Math.round(Math.random() * 5) + 1;
console.log(randomNumber2);

document
  .querySelector('.img1')
  .setAttribute('src', './images/dice' + randomNumber1 + '.png');

document
  .querySelector('.img2')
  .setAttribute('src', './images/dice' + randomNumber2 + '.png');

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').textContent = 'Player 1 is the  winner';
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').textContent = 'Player 2 is the  winner';
} else {
  document.querySelector('h1').textContent = 'It is a draw';
}
