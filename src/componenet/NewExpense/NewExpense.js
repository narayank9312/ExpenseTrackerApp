import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandeler = () => {
    setIsEditing(true);
  };
  const stopEditingHandeler = () => {
    setIsEditing(false);
  };
  const saveExpenseDAtaHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandeler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDAtaHandler}
          onCancel={stopEditingHandeler}
        />
      )}
    </div>
  );
};

export default NewExpense;
