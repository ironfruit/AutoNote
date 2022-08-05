import React from 'react'
import './style/App.css';
import MenuBar from './components/MenuBar'
import AppHeader from './components/Header';
import AppBody from './components/Body'
import AppFooter from './components/Footer'

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <AppHeader/>
      <AppBody/>
      <AppFooter/>
    </div>
  );
}

export default App;
