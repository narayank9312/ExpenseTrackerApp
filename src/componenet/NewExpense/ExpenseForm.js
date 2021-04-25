import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [EnteredTitle, SetEnteredTitle] = useState('');
  const [EnteredAmount, SetEnteredAmount] = useState('');
  const [EnteredDate, SetEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    SetEnteredTitle(event.target.value);
  };

  const amountChangeHAndler = (event) => {
    SetEnteredAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    SetEnteredDate(event.target.value);
  };
  const sumbitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    SetEnteredAmount('');
    SetEnteredDate('');
    SetEnteredTitle('');
  };
  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={amountChangeHAndler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={EnteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="button" onClick={props.onCancel}>
          {' '}
          cancel{' '}
        </button>
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
