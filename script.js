//Getting all the ids from the HTML page

quoteContainer=document.getElementById('quote-container');
quoteText=document.getElementById('quote');
authorText=document.getElementById('author');
twitterBtn=document.getElementById('twitter');
newQuoteBtn=document.getElementById('new-quote');


//Getting data from API
 
let apiQuotes=[]

//function to fetch new Quotes from API
function newQuotes(){

   //fetching random quotes from API
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    if(!quote.author){
        authorText.textContent="unknown"
    }
    else{
        authorText.textContent=quote.author;
    }

    if(quote.text.length>100){
        quoteText.classList.add('long-quote')
    }
    else{
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent=quote.text;
    // console.log(quote)
 }

 
async function displayQuote(){
 const apiUrl='https://type.fit/api/quotes';
try{
    const response=await fetch(apiUrl);
 apiQuotes= await response.json();
    newQuotes();
    
 }
 catch(error){
     displayQuote()
     console.log('hoopps error found ',error);

 }
}

//Ading event listener for a random quote button
newQuoteBtn.addEventListener('click',newQuotes);

displayQuote()