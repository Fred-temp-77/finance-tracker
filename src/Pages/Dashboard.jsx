import React, { useState, useEffect } from 'react'
import Header from '../Components/Header/Header'
import Card from '../Components/ProfileCard/Card'
import TransactHist from '../Components/TransactHist1/TransactHist'
import TransactHist2 from '../Components/TransactHist2/TransactHist2'
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
            <Link to="/" className={styles.title}>Finance Tracker</Link>
            <div className={styles.head}>
                <Header />
            </div>
        </div>

        {/* Body 1 */}
        <div className={styles.main1}>
            {/* Sides */}
            <div className={styles.sides1}>
                <Card />
                <TransactHist />
            </div>
            {/* Chart */}
            <div className={styles.chart1}>
                Chart goes here
            </div>
        </div>

        {/* Body 2 */}
        <div>
            {/* Sides */}
            <div>
                <TransactHist2 expenses={expenses} />
            </div>
            {/* Chart */}
            <div>
                Chart goes here
            </div>
        </div>
    </div>
  )
}

export default Dashboard