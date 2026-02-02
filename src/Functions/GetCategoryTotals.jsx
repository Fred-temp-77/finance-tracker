const getCategoryTotals = (expenses) => {
  const totals = expenses.reduce((acc, expense) => {
    acc[expense.category] =
      (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return Object.entries(totals).map(([category, amount]) => ({
    name: category,
    value: amount,
  }));
};

export default getCategoryTotals;