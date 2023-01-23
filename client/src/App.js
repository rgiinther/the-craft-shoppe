import logo from './logo.svg';
import './App.css';

//import components
import Nav from './components/Nav';
import Homepage from './components/Homepage';


function App() {
  return (
    <div>
      <Nav></Nav>
    
    <main>
      <Homepage></Homepage>
    </main>
    </div>
  );
}

export default App;
