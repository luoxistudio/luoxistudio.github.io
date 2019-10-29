import './App.scss';
import * as React from 'react';
import Gallery from '../Gallery';
import Logo from '../Logo';
import Nav from '../Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Nav />
      </header>
      <Gallery />
      <footer className="App-footer">
        <p>Designed by CHOUCHOU &copy; 2019</p>
        <Logo size="small" withName={false} />
      </footer>
    </div>
  );
}

export default App;
