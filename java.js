const quotes = [
"Be the change you want to see in the world.",
"If you want to live a happy life, tie it to a goal, not to people or things.",
"Strive not to be a success, but rather to be of value.", 
"I have not failed. I've just found 10,000 ways that won't work.",
"You miss 100% of the shots you don't take.",
"Success is not final, failure is not fatal: it is the courage to continue that counts.",
"The only way to do great work is to love what you do.",
"Believe you can and you're halfway there.",
"You can't build a reputation on what you are going to do",
"Everything you can imagine is real.",
"don't trust rabbits, they bite"

  ]
  function getQuote(){
    const randomNumber=Math.floor(Math.random()*quotes.length);
    const randomQuote=quotes[randomNumber];
    const quoteElement=document.getElementById("text");
    quoteElement.innerHTML=`<i></i> ${randomQuote}`;
  }