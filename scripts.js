var inputTitle = document.querySelector('.input__title'); 
var inputUrl = document.querySelector('.input__url'); 
var enterButton = document.querySelector('.enter__btn'); 
var firstSide = document.querySelector('.first__side');
var secondSide = document.querySelector('.second__side');
var card = document.createElement('article'); 
var bookmarkMadeCount = document.querySelector('.article__made'); 
var bookmarkReadCount = document.querySelector('.article__read');
var bookmarkUnreadCount = document.querySelector('.article__unread');
var deleteReadButton = document.querySelector('.delete__read');
var readButton = document.querySelector('.read__button'); 

secondSide.addEventListener('click', markRead); 
secondSide.addEventListener('click', deleteCard); 
deleteReadButton.addEventListener('click', deleteRead); 
inputTitle.addEventListener('input', disableEnter);  
inputUrl.addEventListener('input', disableEnter); 
enterButton.addEventListener('click', verifyInput); 

secondSide.style.overflow = 'auto'; //Setting the overflow so that it
firstSide.style.overflow = 'auto'; //creates a scroll bar instead of running off the page



function verifyInput() {      
  if (inputTitle.value === '' || inputUrl.value === '') {     //if either the input or url fields are empty then run the
    alert('Please enter the required information')    //alert the indicated text
  } else {        //if the "if" statement is not run, then run the following function
    verifyUrl();    // Invoking the verifyUrl function
  }
};

function verifyUrl() {
if (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(inputUrl.value)) { //If the value entered in the url box is actually a url then run the following function
createCard();     // invoking the createCard function
} else {    // if the "if" statement is not run, then run the following function
  alert('Please enter a valid url'); // alert the indicated text
}
}

function createCard() {    
  var secondSide=document.querySelector('.second__side'); //selecting the left side of the page and setting it to a variable
  var card=document.createElement('article'); //setting the card body to an element
  card.setAttribute('class', 'card__body'); //setting the card's class to card__body
  appendCard(secondSide, card); //appending the card variable to the left side of the page(the secondSide variable)
  totalCount(); //invoking the totalCount function
};

function appendCard(section, article) {
  section.appendChild(article); //appending a section
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
    <article>`); //prepending the card and styling it at the same time by using template literal. the ${} sections are passing in values from the inputUrl and inputTitle text boxes
  clearInputFields(); //calling the clearInputFields function
  disableDeleteRead(); //calling the disableDeleteRead function
};

function markRead() {
  if (event.target && event.target.matches(".read__button")) { //if the place that is clicked has a class of read__button then run the following function
    var buttons = document.querySelectorAll('.card__button');
    var card = event.target.closest('.card__body') //selects everything on the page that has a class of card__body then picks the one that is closest to where the click occured
    card.classList.toggle('readCard'); //remove or add the readCard class on each click. 
    for (i=0; i < buttons.length; i++) {
      buttons[i].classList.toggle('readCard');
    }
    totalCount(); //invoking the totalCount function
  };
};

function totalCount() {
  var totalCardArray = document.querySelectorAll('.card__body'); //selecting all of the items with the class of card__body and adding them to an array called totalCardArray
  var readCardArray = document.querySelectorAll('.readCard'); //selecting all of the items with the class of readCard and adding them to an array called readCardArray
  var unreadCardArray = (totalCardArray.length - readCardArray.length); // setting the value of the unreadCardArray to (total cards - read cards)
  bookmarkReadCount.innerText = 'Read: ' + readCardArray.length; // changing the text of a paragraph called bookmarkReadCount 
  bookmarkUnreadCount.innerText = 'Unread: ' + unreadCardArray; // changing the text of a paragraph called bookmarkUnreadCount
  bookmarkMadeCount.innerText = 'Total: ' + totalCardArray.length; // changing the text of a paragraph called bookmarkMadeCount
};

function deleteCard() {
  if (event.target && event.target.matches('.delete__button')) { //if the item clicked on has a class of delete__button, then run the following function
    var card = event.target.closest('.card__body'); // setting the card body that is closest to where the click occured to the variable card
    card.remove(); //calling the remove method on the card variable, removing the variable card and everything that it stores from the page
  };
  totalCount(); // Invoking the totalCount function
};

function deleteRead () {
  var readCardArray = document.querySelectorAll('.readCard'); //grabbing all of the items with the class of readCard to a variable in the form of an array
  for (var i = 0; i < readCardArray.length; i++) { //running the array through a loop so that whatever is in our function happens to each individual card
  readCardArray[i].remove(); //removing every item in the array from the page
  }
  totalCount(); //invoking the totalCount function
};

  
function disableEnter() {
  if (inputTitle.value === '' || inputUrl.value === '') {   // if either the Url or Title textboxes are empty, then run the following function
    enterButton.disabled = true; //disable the enter button
  } else { // if the "if" block is not executed, then run the following function
    enterButton.disabled = false; //enable the enter button
  }
};

function clearInputFields () {
  inputTitle.value = '';    //clear the title textbox
  inputUrl.value = '';    //clear the url title textbox
  enterButton.disabled = true;    //disable the enter button
}

function disableDeleteRead() {
var totalCardArray = document.querySelectorAll('.card__body'); //Putting all of the cards into an array
    deleteReadButton.disabled = false;  // enable the "delete read cards button"` 
};

