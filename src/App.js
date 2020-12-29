import './style/App.css';
import AppHeader from './components/Header';
import AppBody from './components/Body'
import AppFooter from './components/Footer'

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
