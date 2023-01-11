// Fetcha JSON filen
fetch('citat-data.json')
  .then(response => response.json())
  .then(data => {
    // Hämta citatet och författarelementen från HTML
    const quoteText = document.querySelector('#text');
    const quoteAuthor = document.querySelector('#author');
    const newQuoteBtn = document.querySelector('#new-quote');
    // Hjälpfunktion för att få slumpmässigt citat
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const { quote, author } = data[randomIndex];
      quoteText.innerText = quote;
      quoteAuthor.innerText = author;
    };
    // Tilldela funktionen till button
    newQuoteBtn.addEventListener('click', getRandomQuote);
    // Initiera citatet t HTML-koden 
    getRandomQuote();
  });
