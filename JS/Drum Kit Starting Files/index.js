let numofdrums = document.querySelectorAll('.drum').length;
console.log(numofdrums);
for (let i = 0; i < numofdrums; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', drumClick);
}

function drumClick() {
  let buttonInnerText = this.textContent;
  play(buttonInnerText);
  addAnimation(buttonInnerText);
}

document.addEventListener('keydown', function (e) {
  play(e.key);
  addAnimation(e.key);
});
function play(key) {
  switch (key) {
    case 'w':
      let crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      let kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;
    case 's':
      let snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      let tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'j':
      let tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'k':
      let tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'l':
      let tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(key, 'Invalid');
      break;
  }
}

function addAnimation(node) {
  let activeButton = $('.' + node);
  activeButton.classList.add('pressed');
  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 200);
}
