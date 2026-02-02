import React, { useState, useEffect } from 'react'
import Header from '../Components/Header/Header'
import Card from '../Components/ProfileCard/Card'
import TransactHist2 from '../Components/TransactHist2/TransactHist2'
import ExpenseChart from '../Components/ExpenseChart/ExpenseChart'
import Budget from '../Components/Budget/Budget'
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css'

const Dashboard = () => {
    
      const [expenses, setExpenses] = useState(() => {
        return JSON.parse(localStorage.getItem("expenses")) || [];
      });
    
      useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
      }, [expenses]);


  return (
    <div className='w-[100%] '>
        {/* Header */}
        <div className={styles.header2}>
            <Link to="/home" className={styles.title}>Finance Tracker</Link>
            <div className={styles.head}>
                <Header />
            </div>
        </div>

        {/* Body 1 */}
        <div className={styles.main1}>
            {/* Sides */}
            <div className={styles.sides1}>
                <Card />
                {/* <TransactHist /> */}
            </div>
            {/* Chart */}
            <div className={styles.otherside}>
                <div className={styles.chart1}>
                    <ExpenseChart expenses={expenses} />
                    <TransactHist2 expenses={expenses} />
                </div>
                <div className={styles.budget}>
                    <Budget expenses={expenses} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard