import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';
import './Styles/ExpenseList.css';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    if (expenses.length === 0) {
        return <p>No expenses added yet.</p>;
    }

    return (
        <div>
            <h3 className="expense-list-header">Expenses</h3>
            <ul className="list-group">
                {expenses.map(expense => (
                    <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
