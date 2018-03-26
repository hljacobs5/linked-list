
var inputTitle = document.querySelector('.input__title');
var inputUrl = document.querySelector('.input__url');
var enterButton = document.querySelector('.enter__btn');
var secondSide = document.querySelector('.second__side');
var card = document.createElement('article');
var bookmarkMadeCount = document.querySelector('.article__made');
var bookmarkReadCount = document.querySelector('.article__read');
var warning = document.querySelector('.paragraph__warning');
var deleteReadButton = document.querySelector('.delete__read');
var readButton = document.querySelector('.read__button');

secondSide.addEventListener('click', markRead);
secondSide.addEventListener('click', deleteCard);
deleteReadButton.addEventListener('click', deleteRead);
inputTitle.addEventListener('input', disableEnter);
inputUrl.addEventListener('input', disableEnter);
enterButton.addEventListener('click', verifyInput);
deleteReadButton.addEventListener('click', totalCount);

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
  totalCount();
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
  disableDeleteRead();
};

function markRead() {
  if (event.target && event.target.matches(".read__button")) {
    var card = event.target.closest('article');
    card.classList.toggle('readCard');
    readCount();
  };
};

function totalCount() {
  var totalCardArray = document.querySelectorAll('.card__body');
  var readCardArray = document.querySelectorAll('.readCard'); 
  bookmarkReadCount.innerText = 'Read: ' + readCardArray.length;
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
  var totalCardArray = document.querySelectorAll('.card__body');
  var readCardArray = document.querySelectorAll('.readCard');
  for (var i = 0; i < readCardArray.length; i++) {
  readCardArray[i].parentElement.remove();
  };
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

