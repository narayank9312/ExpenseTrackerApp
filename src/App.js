import React, {useState} from 'react';

import Expenses from './componenet/Expenses/Expenses';
import NewExpense from './componenet/NewExpense/NewExpense';

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
  {
    id: 'e3',
    title: 'Car Insurance',

    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk ',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);
  const addExpenseHandler = (expense) => {
    console.log('in aap.js');
    console.log(expense);

    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expenses);
  };
  console.log(expenses);
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
