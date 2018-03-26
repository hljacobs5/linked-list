
var inputTitle = document.querySelector('.input__title');
var inputUrl = document.querySelector('.input__url');
var enterButton = document.querySelector('.enter__btn');
var secondSide = document.querySelector('.second__side');
var card = document.createElement('article');
var bookmarkMadeCount = document.querySelector('.article__made');
var bookmarkReadCount = document.querySelector('.article__read');
var counter = 0;
var warning = document.querySelector('.paragraph__warning');
var deleteReadButton = document.querySelector('.delete__read');
var readButton = document.querySelector('.read__button');

secondSide.addEventListener('click', markRead);
secondSide.addEventListener('click', deleteCard);
deleteReadButton.addEventListener('click', deleteRead);
inputTitle.addEventListener('input', disableEnter);
inputUrl.addEventListener('input', disableEnter);
enterButton.addEventListener('click', verifyInput);

function verifyInput() {
  if (inputTitle.value === '' || inputUrl.value === '')
  {
    alert('Please enter the required information')
  } else {
    createCard();
  }
};

function createCard() {
  event.preventDefault();
  var secondSide=document.querySelector('.second__side');
  var card=document.createElement('article');
  card.setAttribute('class', 'card__body');
  appendCard(secondSide, card); 
  allCount();
};

function appendCard(section, article) {
  section.appendChild(article);
  article.innerHTML = (`
    <article class="card__body__article">
    <h2>${inputTitle.value}</h2>
    <div class="article__link">
      <a class="card__url" href="${inputUrl.value}" style="text-decoration: none">${inputUrl.value}</a>
    </div>
    <button class="read__button">Read</p>
    <button class="delete__button">Delete</p>
    <article>`);
  clearInputFields();
};

function allCount() {
  counter++;
  bookmarkMadeCount.innerText='Bookmark Made: ' + counter;
}

function markRead() {
  if (event.target && event.target.matches(".read__button")) {
    var card = event.target.closest('article');
    card.classList.toggle('readCard');
    readCount();
  };
};

function readCount() {
  var array = document.querySelectorAll('.readCard');
  bookmarkReadCount.innerText = 'Read: ' + array.length;
};

function deleteCard() {
  if (event.target && event.target.matches('.delete__button')) {
    var card = event.target.closest('.card__body');
    card.remove();
    var array = document.querySelectorAll('.readCard');
    bookmarkReadCount.innterText = 'Read: ' + array.length;
  };
};

function deleteRead () {
  var allRead = document.querySelectorAll('.readCard');
  for (var i = 0; i < allRead.length; i++) {
    allRead[i].parentElement.remove();
    bookmarkReadCount.innerText = 'Read: ' + array.length;
  };
};

  
function disableEnter() {
  if (inputTitle.value === '' && inputUrl.value === '') {
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

