import React from "react";
import "./ListExpenses.css";
const ListExpenses = ({data}) => {
  return (
    <div className="expense-list">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Category</th>
          <th>Product</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.id}</td>
            <td>{expense.date}</td>
            <td>{expense.category}</td>
            <td>{expense.product}</td>
            <td>₹ {expense.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ListExpenses;