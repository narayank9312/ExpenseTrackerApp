import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = 'Car Insurance';
  //   const expenseAmount = 294.65;

  const [title, setTitle] = useState(props.title); //doubt ask to paras

  const clickHandler = () => {
    setTitle('Updated');
    console.log('clicked');
  };
  console.log(props.title);
  console.log(props.date);
  console.log(props.amount);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
      </div>
      <button onClick={clickHandler}> change title</button>
    </Card>
  );
}

export default ExpenseItem;
