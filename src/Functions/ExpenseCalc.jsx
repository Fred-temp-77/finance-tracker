const ExpenseCalc = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <div>₦{total}</div>
  )
}

export default ExpenseCalc