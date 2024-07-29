import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          리액트 타입스크립트 <code>src/App.tsx</code> 작성
        </p>
        <a
          className="App-link"
          href="https://www.naver.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          네이버 검색
        </a>
        <a
          className="App-link"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google 검색
        </a>
      </header>
    </div>
  );
}

export default App;
