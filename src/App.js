import React from 'react'
import './style/App.css';
//import MenuBar from './components/MenuBar'
import AppHeader from './components/Header';
import AppBody from './components/Body'
import AppFooter from './components/Footer'

// <MenuBar/>

function App() {
  return (
    <div className="App">
      
      <AppHeader/>
      <AppBody/>
      <AppFooter/>
    </div>
  );
}

export default App;
