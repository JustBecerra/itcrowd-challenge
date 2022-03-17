import './App.css';
import ProductsList from './components/ProductsList/ProductsList.jsx'
import AddProd from './components/AddProd/AddProd.jsx'

function App() {
  return (
    <div>
      <header>
        List of products:
      </header>
      <ProductsList/>
      <AddProd />
    </div>
  );
}

export default App;
