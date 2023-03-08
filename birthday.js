const blankName = document.getElementById('name');
const blankDob = document.getElementById('dob');

window.addEventListener('load', () => {
  const { name, dob } = JSON.parse(sessionStorage.getItem('birthdayData'));
  const currentDate = new Date().toISOString().slice(0, 10);

  const dobReverse = dob.split('-').reverse().join('-')

  if (currentDate.slice(5) !== dob.slice(5)) {
    window.location = 'notYourDay.html'
  } else {
    blankName.textContent = name;
    blankDob.textContent = dobReverse;

    const hbSound = new Audio('assets/happy-birthday-sound.mp3');

    setTimeout(() => {
      hbSound.play();
    }, 300)
  }
});

const userInputPrize = document.getElementById('user-input-prize');
const addButton = document.getElementById('add-button');
const prizeCard = document.getElementById('prize-card');

const someGift = [];

addButton.addEventListener('click', () => {
  someGift.push(userInputPrize.value);

  let element = '';
  someGift.map(gift => element += `<li class="text-center font-semibold text-slate-100 my-1">${gift}</li>`);

  prizeCard.innerHTML = element;

  userInputPrize.value = '';
});

const spinWheel = document.getElementById('spin-wheel');
const popupGift = document.getElementById('popup-gift');
const giftedName = document.getElementById('gifted-name');
const gift = document.getElementById('gift');
const { name } = JSON.parse(sessionStorage.getItem('birthdayData'));

spinWheel.addEventListener('click', function() {
  this.classList.add('animate-spin');
  const ranNum = Math.floor(Math.random() * someGift.length);
  
  setTimeout(() => {
    this.classList.remove('animate-spin')
  }, 3000);

  setTimeout(() => {
    popupGift.classList.remove('hidden')
  }, 3300);

  const sound = new Audio('assets/yay-6120.mp3');
 
  setTimeout(() => {
    sound.play();
  }, 3400)

  giftedName.textContent = name;
  gift.textContent = someGift[ranNum]
});

function closePopup() {
  setTimeout(() => {
    popupGift.classList.add('hidden')
  }, 300)
}

const exitButton = document.getElementById('exit');
exitButton.addEventListener('click', () => {
  closePopup();
  console.log('haha')
});

const spinAgain = document.getElementById('spin-again');
spinAgain.addEventListener('click', () => {
  closePopup();
})



