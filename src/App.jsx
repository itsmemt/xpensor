import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import AddExpense from './Components/AddExpense/AddExpense';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addExpense" element={<AddExpense/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App;