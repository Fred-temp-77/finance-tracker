const getCategoryTotals = (expenses) => {
  return expenses.reduce((totals, expense) => {
    const { category, amount } = expense;

    totals[category] = (totals[category] || 0) + amount;

    return totals;
  }, {});
};

export default getCategoryTotals;