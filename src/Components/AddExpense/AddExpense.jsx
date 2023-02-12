import { useState } from "react";
import { Link } from "react-router-dom";
import ListExpenses from "../ListExpenses/ListExpenses";
import './AddExpense.css';
const AddExpense = () => {
  let initialData = [
    {
      id: 1,
      date: "2022-01-01",
      category: "Groceries",
      product: "Bread",
      amount: 3.99
    },
    {
      id: 2,
      date: "2022-01-02",
      category: "Entertainment",
      product: "Movie Ticket",
      amount: 12.99
    },
    {
      id: 3,
      date: "2022-01-03",
      category: "Transportation",
      product: "Gas",
      amount: 30.00
    },
    {
      id: 4,
      date: "2022-01-04",
      category: "Clothing",
      product: "Shirt",
      amount: 19.99
    },
    {
      id: 5,
      date: "2022-01-05",
      category: "Food",
      product: "Lunch",
      amount: 7.99
    },
    {
      id: 6,
      date: "2022-01-06",
      category: "Utilities",
      product: "Electricity Bill",
      amount: 99.99
    },
    {
      id: 7,
      date: "2022-01-07",
      category: "Travel",
      product: "Plane Ticket",
      amount: 199.99
    },
    {
      id: 8,
      date: "2022-01-08",
      category: "Health",
      product: "Prescription",
      amount: 50.00
    },
    {
      id: 9,
      date: "2022-01-09",
      category: "Gift",
      product: "Birthday Gift",
      amount: 25.00
    },
    {
      id: 10,
      date: "2022-01-10",
      category: "Entertainment",
      product: "Concert Ticket",
      amount: 59.99
    }
  ];
  const [expenseData, setExpenseData] = useState(initialData);
  const [formData, setFormData] = useState({
    date: "",
    product: "",
    category: "",
    amount: null
  });
  const inputChangeHandler = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    setExpenseData([
      ...expenseData,
      {
        id: expenseData.length + 1,
        date: formData.date,
        product: formData.product,
        category: formData.category,
        amount: formData.amount
      }
    ]);
    setFormData({
      date: "",
      product: "",
      category: "",
      amount: ""
    });
  };

  return (
   
    <div className="add-expense">
      <div className="form-container">
        <form className="form" onSubmit={submitHandler}>
          <p> <Link to="/">🡰 AddExpense</Link></p>
           <hr/>
          <label htmlFor="date">Date of Spend : </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={inputChangeHandler}
            required
          /><br/>
          <label htmlFor="product">Product : </label>
          <input
            type="text"
            name="product"
            id="product"
            value={formData.product}
            onChange={inputChangeHandler}
            placeholder="Eg. Movie Ticket"
            required
          /><br/>
          <label htmlFor="category">Category : </label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={inputChangeHandler}
            placeholder="Eg. Entertainment"
            required
          /><br/>
          <label htmlFor="amount">Amount : </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={inputChangeHandler}
            placeholder="Eg. 500"
            required
          /><br/>
          <button type="submit">Save Expense</button>
          <Link to="/"><button>Cancel</button></Link>
        </form>
      </div>
      <ListExpenses data={expenseData}/>
    </div>
  );
};

export default AddExpense;