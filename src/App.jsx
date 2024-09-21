import { useState } from 'react';
import './App.css';
import quotes from './Quotes';

function App() {

  
  const getRandomIndex = () => {
    return Math.floor(Math.random() * quotes.length);
  }

  const [quote, setQuote] = useState(quotes[getRandomIndex()]);

  const getRandomQuote = () => {
    setQuote(quotes[getRandomIndex()]);
  }

  const copyQuote = () => {
    navigator.clipboard.writeText(`"${quote.quote}" - ${quote.author}`);
    alert('Quote copied to clipboard!');
  };


 
  return (
    <div className="container">
      <div id="quote-box">
        <blockquote>
          <p id="text"><span id='quote-mark'>“</span>{quote.quote}<span id='quote-mark'>”</span></p>
          <footer id="author">- {quote.author}</footer>
        </blockquote>
        <div className="buttons">
          <div className="left-buttons">
            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`} target="_blank" rel="noopener noreferrer">
              Tweet
            </a>
            <button id="copy-quote" onClick={copyQuote}>
              Copy
            </button>
          </div>
          <button id="new-quote" onClick={getRandomQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
