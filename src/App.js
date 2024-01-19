import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import './App.css';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocator</h1>
                <div className='row mt-3'>
                    <div className='col-sm-3'>
                        <Budget />
                    </div>
                    <div className='col-sm-3'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm-6'>
                        <Remaining /> {/* Includes Currency Selection */}
                    </div>
                </div>


                <h3> Expenses</h3>
                <div className='row mt-3'>

                <ExpenseList />
                </div>

                <h3>Departmental Allocation</h3>
                <div className='row mt-3'>
                <AllocationForm />
                </div>


            </div>
        </AppProvider>
    );
};

export default App;
