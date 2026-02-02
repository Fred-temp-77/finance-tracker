const BalanceCalc = ({ expenses, income }) => {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const balance = income - totalExpenses;
  return (
    <div>₦{balance}</div>
  )
}

export default BalanceCalc