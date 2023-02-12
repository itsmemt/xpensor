import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
        <Link to="/addExpense"><button>ADD EXPENSE</button></Link>
    </div>
  )
}

export default Home;