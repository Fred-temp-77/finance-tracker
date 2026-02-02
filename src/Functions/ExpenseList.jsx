const ExpenseList = ({ expenses }) => {
    if (!expenses || expenses.length === 0) {
        return <p>No expenses yet</p>;
    }
  
    return (
      <ul>
        {expenses.map((item) => (
          <li key={item.id}>
            ₦{item.amount} – {item.description} ({item.category})
          </li>
        ))}
      </ul>
    );
  }
  
  export default ExpenseList;