import React from 'react'
import styles from './TransactHist.module.css'

const TransactHist = () => {

  return (
    <div className={`${styles.card} w-[200px] h-[200px] rounded-[10px] flex flex-col justify-center items-center text-white gap-4`}>
        <div className={`${styles.card2} flex flex-col justify-start items-center text-white gap-2`}>
            <h3>Transaction History</h3>
        </div>
    </div>
  )
}

export default TransactHist