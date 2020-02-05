import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startRemoveExpenseSpy, startEditExpenseSpy, historySpy, wrapper;
const expense = expenses[0];
beforeEach(() => {
    startRemoveExpenseSpy = jest.fn();
    startEditExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage expense={expense} history={historySpy} startEditExpense={startEditExpenseSpy} startRemoveExpense={startRemoveExpenseSpy} />);
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    const updates = expense;
    wrapper.find('ExpenseForm').at(0).prop('onSubmit')(updates);
    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expense.id, updates);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith(expense.id);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});