import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

const ExpenseItem = ({ id, name, cost }) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleIncrease = () => {
        dispatch({
            type: 'INCREASE_EXPENSE',
            payload: { id, amount: 10 }
        });
    };

    const handleDecrease = () => {
        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: { id, amount: 10 }
        });
    };

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        });
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {name}
            <span>
                {currency}{cost}
                <button onClick={handleIncrease} className="btn btn-increase">
                    <FontAwesomeIcon icon={faPlus} /> {/* Plus icon */}
                </button>
                <button onClick={handleDecrease} className="btn btn-decrease">
                    <FontAwesomeIcon icon={faMinus} /> {/* Minus icon */}
                </button>
                <button onClick={handleDelete} className="btn btn-delete">
                    <FontAwesomeIcon icon={faTrash} /> {/* Trash icon */}
                </button>
            </span>
        </li>
        
    );
};

export default ExpenseItem;
