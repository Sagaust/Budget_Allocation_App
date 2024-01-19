import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, expenses, budget, currency } = useContext(AppContext); // Include currency from context
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    
        // Define the list of departments
        const departments = [
            'Marketing',
            'Finance',
            'Sales',
            'Human Resource',
            'IT',
            'Operations',
            'Research and Development',
            'Customer Service'
            // Add more departments as needed
        ];
    
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.cost, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const allocationAmount = parseFloat(amount);

 // Validation for valid amount
 if (isNaN(allocationAmount) || allocationAmount <= 0) {
    setError('Please enter a valid allocation amount');
    return;
}

// Check if the allocation exceeds the remaining budget
if (allocationAmount + totalExpenses > budget) {
    setError('Allocation exceeds remaining budget');
    return;
}

// Check if department is selected
if (!selectedDepartment) {
    setError('Please select a department');
    return;
}

        dispatch({
            type: 'ADD_EXPENSE',
            payload: { name: selectedDepartment, cost: allocationAmount }
        });

        // Reset fields
        setSelectedDepartment('');
        setAmount('');
        setError('');
    };



    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Select a Department</label>
                        <select
                            id="department"
                            className="form-control"
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                        >
                            <option value="">Select a Department</option>
                            {departments.map((department, index) => (
                                <option key={index} value={department}>
                                    {department}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">{currency}</span> {/* Currency prefix */}
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <button type="submit" className="allocation-form-save-btn">
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AllocationForm;
