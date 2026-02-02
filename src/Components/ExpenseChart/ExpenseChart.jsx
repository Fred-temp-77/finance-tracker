import React, { useState, useEffect } from 'react'
import getCategoryTotals from '../../Functions/GetCategoryTotals';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import CustomTooltip from '../../Functions/CustomTooltip';
import styles from './ExpenseChart.module.css'

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  


const ExpenseChart = ({ expenses }) => {
    const categoryTotals = getCategoryTotals(expenses);
    const Colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'];
    return (
        <div className={`${styles.chartbg}`}>
            <div className={`${styles.chartbg2}`}>
                <h2 className='text-white text-center pt-4'>Expense Distribution</h2>
                <PieChart width={450} height={450}>
                    <Pie data={categoryTotals}  dataKey="value" label={renderCustomizedLabel} labelLine={false} >
                        {categoryTotals.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={Colors[index % Colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </div>
        </div>
    )
}

export default ExpenseChart