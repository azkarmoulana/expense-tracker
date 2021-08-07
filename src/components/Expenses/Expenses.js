import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [items, setItems] = useState(props.items);
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    const filteredItems = props.items.filter(item => {
      return item.date.getFullYear() === +filteredYear;
    });

    setItems(filteredItems);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {items.map((expense) => (
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
      ))}
    </Card>
  );
};

export default Expenses;
