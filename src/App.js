import './App.css';
import { Header } from './components/Header'
import { Total } from './components/Total'
import { Sold } from './components/Sold'
import { ListOfTransactions } from './components/ListOfTransactions'
import { AddTransaction} from './components/AddTransaction'
import { GlobalProvider } from './context/Global'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Total />
        <Sold />
        <ListOfTransactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
