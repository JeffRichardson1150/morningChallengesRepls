const searchForm = document.querySelector('form'); // setting a const variable for the form tag in our html
const article = document.querySelector('article');

const storeEntry = document.querySelector('.store');
const productEntry = document.querySelector('.product');
const quantityEntry = document.querySelector('.quantity');


const submitBtn = document.querySelector('.submit');
searchForm.addEventListener('submit', fetchResults); // searchForm is the entire form (per html) (not a button). When submit button submits the form, fire off function fetchResults. This contains a function reference to fetchResults, not invocation.

function fetchResults(e) { // fetchResults is called from the searchForm - fetchResults is an event handling function. Event handling functions receive an event object. Name the object "e" so we can process it.
    e.preventDefault();  // prevents the page from being refreshed; by default, any form submission will automatically refresh the page

    console.log(storeEntry.value, productEntry.value, quantityEntry.value);

    let para = document.createElement('p'); 
    para.textContent = 'I went to ' + storeEntry.value + " to buy " + quantityEntry.value + ' ' + productEntry.value + "'s"; 

    article.appendChild(para);  // append the para to the article

    console.log('I went to ' + storeEntry.value + " to buy " + quantityEntry.value + ' ' + productEntry.value + "'s");
    console.log('I went to ' + storeEntry.value + " to buy " + quantityEntry.value + ' ' + productEntry.value + "'s");


}
