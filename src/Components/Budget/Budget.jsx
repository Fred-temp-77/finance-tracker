import React from 'react'
import BudgetSetup from '../BudgetSetup/BudgetSetup'
import GetBudgetStats from '../../Functions/GetBudgetStats'
import styles from './Budget.module.css'
import ProgressBar from '../../Functions/ProgressBar'
import { useState } from 'react'

const Budget = ({ expenses = [] }) => {
    const [budgets, setBudgets] = useState(() => {
        return JSON.parse(localStorage.getItem("budgets")) || {};
    });
    const budgetStatus = GetBudgetStats(budgets, expenses);
    
    const [showModal, setShowModal] = useState(false);
    const handleNewBudgetShow = () => {
        setShowModal(true);
    };
    const handleNewBudgetClose = () => {
        setShowModal(false);
    };
    return (
        <div className={`${styles.card} w-[820px] h-[500px] rounded-[10px] flex flex-col justify-center items-center text-white gap-4`}>
            <div className={`${styles.card2} flex justify-start items-start text-white gap-2 p-[10px]`}>
                <div>
                    <h2 className='text-[40px] text-center'>Budget Overview</h2>
                    {budgetStatus.map((item) => (
                    <div key={item.category}>
                        <h4>{item.category}</h4>

                        <p>
                        ₦{item.spent} / ₦{item.limit}
                        </p>

                        <p>Remaining: ₦{item.remaining}</p>

                        <ProgressBar percentage={item.percentage} />

                        {item.warning === "near" && (
                        <p style={{ color: "orange" }}>
                            ⚠️ Over 80% of budget used
                        </p>
                        )}

                        {item.warning === "exceeded" && (
                        <p style={{ color: "red" }}>
                            🚨 Budget exceeded
                        </p>
                        )}
                    </div>
                    ))}
                    <button className={`${styles.button} ${styles.expense}`}  onClick={handleNewBudgetShow}>Create Budget Limit</button>
                </div>
            </div>
            {showModal && (
            <div className={`fixed inset-0 ${styles.modalBackground} flex flex-col items-center justify-center`}>
                <p onClick={handleNewBudgetClose} className="text-white cursor-pointer">Close</p>
                <BudgetSetup />
            </div>)}
        </div>
    )
}

export default Budget