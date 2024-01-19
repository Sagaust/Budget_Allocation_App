import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Styles/ExpenseTotal.css';

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);

    return (
        <div className="budget-card">
            <span>Total Spent: </span>
            <span> {currency}{totalExpenses} </span>
        </div>
    );
};

export default ExpenseTotal;
