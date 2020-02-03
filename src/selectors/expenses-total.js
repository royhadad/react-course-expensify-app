export default (expenses) => {
    return expenses.reduce((sum, current) => sum + current.amount, 0);
};