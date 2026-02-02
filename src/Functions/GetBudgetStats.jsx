import React from 'react'

const GetBudgetStats = (budgets = {}, expenses = []) => {
    const totals = expenses.reduce((acc, expense) => {
        acc[expense.category] =
          (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});
    return Object.keys(budgets).map((category) => {
        const spent = totals[category] || 0;
        const limit = budgets[category];
        const percentage = Math.min((spent / limit) * 100, 100);
    
        return {
            category,
            limit,
            spent,
            remaining: limit - spent,
            percentage,
            warning:
                percentage >= 100
                ? "exceeded"
                : percentage >= 80
                ? "near"
                : "ok",
        }
    })
}

export default GetBudgetStats