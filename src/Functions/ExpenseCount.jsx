const ExpenseCount = ({ expenses }) => {
  const count = expenses.length;
  return (
    <>{count}</>
  )
}

export default ExpenseCount