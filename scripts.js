
var inputTitle = document.querySelector('.input__title');
var inputUrl = document.querySelector('.input__url');
var enterButton = document.querySelector('.enter__btn');
var firstSide = document.querySelector('.first__side');
var secondSide = document.querySelector('.second__side');
var card = document.createElement('article');
var bookmarkMadeCount = document.querySelector('.article__made');
var bookmarkReadCount = document.querySelector('.article__read');
var bookmarkUnreadCount = document.querySelector('.article__unread');
var warning = document.querySelector('.paragraph__warning');
var deleteReadButton = document.querySelector('.delete__read');
var readButton = document.querySelector('.read__button');

secondSide.addEventListener('click', markRead);
secondSide.addEventListener('click', deleteCard);
deleteReadButton.addEventListener('click', deleteRead);
inputTitle.addEventListener('input', disableEnter);
inputUrl.addEventListener('input', disableEnter);
enterButton.addEventListener('click', verifyInput);

secondSide.style.overflow = 'auto';
firstSide.style.overflow = 'auto';



function verifyInput() {
  if (inputTitle.value === '' || inputUrl.value === '')
  {
    alert('Please enter the required information')
  } else {
    verifyUrl();
  }
};

function verifyUrl() {
if (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(inputUrl.value)) {
createCard();
} else {
  alert('Please enter a valid url');
}
}

function createCard() {
  event.preventDefault();
  var secondSide=document.querySelector('.second__side');
  var card=document.createElement('article');
  card.setAttribute('class', 'card__body');
  appendCard(secondSide, card); 
  totalCount();
};

function appendCard(section, article) {
  section.appendChild(article);
  article.innerHTML = (`
    <article class="card__body__article">
    <h2>${inputTitle.value}</h2>
    <hr>
    <div class="article__link">
      <a class="card__url" href="${inputUrl.value}" style="text-decoration: none">${inputUrl.value}</a>
    </div>
    <hr>
    <button class="card__button read__button">Read</p>
    <button class="card__button delete__button">Delete</p>
    <article>`);
  clearInputFields();
  disableDeleteRead();
};

function markRead() {
  if (event.target && event.target.matches(".read__button")) {
    var readBtn = event.target
    console.log(readBtn)
    readBtn.classList.toggle('readChange')
    var card = event.target.closest('.card__body')
    card.classList.toggle('readCard');
    totalCount();
  };
};

function totalCount() {
  var totalCardArray = document.querySelectorAll('.card__body');
  var readCardArray = document.querySelectorAll('.readCard');
  var unreadCardArray = (totalCardArray.length - readCardArray.length);
  bookmarkReadCount.innerText = 'Read: ' + readCardArray.length;
  bookmarkUnreadCount.innerText = 'Unread: ' + unreadCardArray; 
  bookmarkMadeCount.innerText = 'Total: ' + totalCardArray.length;
};

function deleteCard() {
  if (event.target && event.target.matches('.delete__button')) {
    var card = event.target.closest('.card__body');
    card.remove();
  };
  totalCount();
};

function deleteRead () {
  var readCardArray = document.querySelectorAll('.readCard');
  for (var i = 0; i < readCardArray.length; i++) {
  readCardArray[i].remove();
  }
  totalCount();
};

  
function disableEnter() {
  if (inputTitle.value === '' || inputUrl.value === '') {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
};

function clearInputFields () {
  inputTitle.value = '';
  inputUrl.value = '';
  enterButton.disabled = true;
}

function disableDeleteRead() {
var totalCardArray = document.querySelectorAll('.card__body');
    deleteReadButton.disabled = false;
};

