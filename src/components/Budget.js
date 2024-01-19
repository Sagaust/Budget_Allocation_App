import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './Styles/Budget.css'; // Ensure this path is correct

const Budget = () => {
    const { expenses, budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [editMode, setEditMode] = useState(budget === 0); // Edit mode is on if budget is not set
    const [error, setError] = useState('');

    const handleSave = () => {
        const budgetValue = parseFloat(newBudget);
        if (isNaN(budgetValue) || budgetValue < 0) {
            setError('Please enter a valid budget');
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: budgetValue,
        });
        setEditMode(false);
        setError('');
    };

    return (
        <div className="budget-card">
            {!editMode && (
                <button onClick={() => setEditMode(true)} className="btn btn-edit">Edit Budget</button>
            )}
            {editMode ? (
                <div>
                    <h4>Create Budget</h4>
                    <input
                        type="number"
                        value={newBudget}
                        onChange={(e) => setNewBudget(e.target.value)}
                        className="form-control"
                    />
                    <button onClick={handleSave} className="btn btn-primary mt-2">Save Budget</button>
                    {error && <div className="alert alert-danger mt-2">{error}</div>}
                </div>
            ) : (
                <div>
                    <span>Budget: {currency}{budget}</span>
                </div>
            )}
        </div>
    );
};

export default Budget;
