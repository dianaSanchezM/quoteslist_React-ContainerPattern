import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuotesListContainer from './QuotesListContainer';

function App() {
  const friends = "https://friends-quotes-api.herokuapp.com/quotes";
  const simpsons = "https://thesimpsonsquoteapi.glitch.me/quotes?count=6s";
  const seinfeld = "https://seinfeld-quotes.herokuapp.com/quotes";
  return (
    <div className="App">
     
      <QuotesListContainer api = {friends}  authorName = "character"/>
      <QuotesListContainer api = {simpsons} authorName = "character" />
      {//<QuotesListContainer api = {seinfeld} authorName = "author" />
      }
    </div>
  );
}

export default App;
