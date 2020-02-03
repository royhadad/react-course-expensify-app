import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import getExpensesTotal from '../selectors/expenses-total';

const ExpenseDashboardPage = () => (
  <div>
    {getExpensesTotal([{amount:4}])}
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
