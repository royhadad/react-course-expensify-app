import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startRemoveExpenseSpy, editExpenseSpy, historySpy, wrapper;
const expense = expenses[0];
beforeEach(() => {
    startRemoveExpenseSpy = jest.fn();
    editExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage expense={expense} history={historySpy} editExpense={editExpenseSpy} startRemoveExpense={startRemoveExpenseSpy} />);
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').at(0).prop('onSubmit')(expense);
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expense.id, expense);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith(expense.id);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});