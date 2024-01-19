import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
// import './Styles/Remaining.css';

const Remaining = () => {
    const { expenses, budget, currency, dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);
    const remaining = budget - totalExpenses;

    const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
        dispatch({ type: 'SET_CURRENCY', payload: e.target.value });
    };

    return (
        <div className="row">
            {/* Remaining Budget Card */}
            <div className="col-sm-6">
                <div className="budget-card">
                    <span>Remaining: </span>
                    <span>{currency}{remaining}</span>
                </div>
            </div>

            {/* Currency Selection Card */}
            <div className="col-sm-6">
                <div className="budget-card">
                    <span> Select a Currency:</span>
                    <select 
                        id="currency" 
                        value={selectedCurrency}
                        onChange={handleCurrencyChange}
                        className="form-control"
                    >
                        <option value="£">Pound (£)</option>
                        <option value="$">Dollar ($)</option>
                        <option value="€">Euro (€)</option>
                        {/* Add more currencies as needed */}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Remaining;
