import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';

let wrapper, setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy;
beforeEach(() => {
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilterSpy}
        sortByDate={sortByDateSpy}
        sortByAmount={sortByAmountSpy}
        setStartDate={setStartDateSpy}
        setEndDate={setEndDateSpy}
    />);
});

test('should render ExpenseListFilters with filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altFilters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const text = 'water';
    wrapper.find('input').at(0).simulate('change', { target: { value: text } });
    expect(setTextFilterSpy).toHaveBeenLastCalledWith('water');
});

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const sortByValue = 'date';
    wrapper.find('select').at(0).simulate('change', { target: { value: sortByValue } });
    expect(sortByDateSpy).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const sortByValue = 'amount';
    wrapper.find('select').at(0).simulate('change', { target: { value: sortByValue } });
    expect(sortByAmountSpy).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = altFilters.startDate;
    const endDate = altFilters.endDate;
    wrapper.find(DateRangePicker).at(0).prop('onDatesChange')({ startDate, endDate });
    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find(DateRangePicker).at(0).prop('onFocusChange')(calendarFocused);
    expect(wrapper.find(DateRangePicker).at(0).prop('focusedInput')).toBe(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});