import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
    budget: 0,
    expenses: [],
    currency: '£'
};

// Reducer function
const AppReducer = (state, action) => {
    const totalExpenses = state.expenses.reduce((sum, exp) => sum + exp.cost, 0);

    switch (action.type) {
        case 'SET_BUDGET':
            if (action.payload < totalExpenses) {
                alert('Budget value cannot be lower than the spending');
                return state; // Keeps the state unchanged
            }
            if (action.payload > 20000) {
                alert('Budget value cannot exceed 20000');
                return state; // Keeps the state unchanged
            }
            return {
                ...state,
                budget: action.payload
            };

        case 'ADD_EXPENSE':
            if (totalExpenses + action.payload.cost > state.budget) {
                alert('Allocation exceeds remaining budget');
                return state; // Keeps the state unchanged
            }
            return {
                ...state,
                expenses: [...state.expenses, { id: new Date().getTime().toString(), name: action.payload.name, cost: action.payload.cost }]
            };

        case 'INCREASE_EXPENSE':
            if (totalExpenses + action.payload.amount > state.budget) {
                alert('Increasing expense exceeds remaining budget');
                return state; // Keeps the state unchanged
            }
            return {
                ...state,
                expenses: state.expenses.map(expense =>
                    expense.id === action.payload.id ? { ...expense, cost: expense.cost + action.payload.amount } : expense
                )
            };

        case 'DECREASE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.map(expense =>
                    expense.id === action.payload.id ? { ...expense, cost: Math.max(0, expense.cost - action.payload.amount) } : expense
                )
            };

        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            };

        case 'SET_CURRENCY':
            return {
                ...state,
                currency: action.payload
            };

        default:
            return state;
    }
};

// Create the context
export const AppContext = createContext(initialState);

// Provider component
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
