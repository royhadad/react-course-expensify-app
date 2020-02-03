import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
    render() {
        const expenseWord = this.props.expenseCount === 1 ? 'expense' : 'expenses';
        const formattedExpensesTotal = numeral(this.props.expensesTotal / 100).format('$0,0.00');
        return (
            <div>
                <h1>
                    viewing {this.props.expenseCount} {expenseWord} totalling {formattedExpensesTotal}
                </h1>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);