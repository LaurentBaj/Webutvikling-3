import './App.css';
import CoffeeList from './components/coffees/CoffeeList';
import Incy from './components/incrementator/Incrementator';


function App() {
  return (
    <div className="App">
      <Incy />
      <CoffeeList/>
    </div>
  );
}

export default App;
