import React, { useState, useEffect } from 'react'
import styles from './TransactHist.module.css'
import ExpenseList from '../../Functions/ExpenseList';

const TransactHist2 = ({ expenses }) => {

  return (
    <div className={`${styles.card} w-[300px] h-[500px] rounded-[10px] flex flex-col justify-center items-center text-white gap-4`}>
        <div className={`${styles.card2} flex flex-col justify-start items-center text-white gap-2`}>
          <h3>Transaction History</h3>
          <div>
            <ExpenseList expenses={expenses} />
          </div>
          <p className={styles.text}>Click on Expenses at the top of the screen to create a new transaction</p>
        </div>
    </div>
  )
}

export default TransactHist2