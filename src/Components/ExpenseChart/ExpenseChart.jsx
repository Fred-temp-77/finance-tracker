import React from 'react'
import React, { useState, useEffect } from 'react'
import getCategoryTotals from '../../Functions/GetCategoryTotals';
import { PieChart, Tooltip } from 'recharts';

const ExpenseChart = ({ expenses }) => {
    const categoryTotals = getCategoryTotals(expenses);
    const Colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie data={categoryTotals} dataKey="amount" label>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={Colors[index]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default ExpenseChart