import React from 'react';
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should match snapshot with all 3 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expensesTotal={114195} />);
    expect(wrapper).toMatchSnapshot();
});

test('should match snapshot with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={expenses[0].amount} />);
    expect(wrapper).toMatchSnapshot();
});