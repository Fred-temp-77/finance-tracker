import React from 'react'
import { useEffect, useState } from "react";
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import NewTransact from '../NewTransact/NewTransact';
import ExpenseCalc from '../../Functions/ExpenseCalc';
import ExpenseCount from '../../Functions/ExpenseCount';
import BalanceCalc from '../../Functions/BalanceCalc';
import UpdateIncome from '../UpdateIncome/UpdateIncome';

const Header = () => {
    const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
    });

    useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    const [showUpdateIncome, setShowUpdateIncome] = useState(false);
    const handleUpdateIncomeShow = () => {
        setShowUpdateIncome(true);
    };
    const handleUpdateIncomeClose = () => {
        setShowUpdateIncome(false);
    };


    const [showModal, setShowModal] = useState(false);
    const handleNewTransactShow = () => {
        setShowModal(true);
    };
    const handleNewTransactClose = () => {
        setShowModal(false);
    };

    const [income, setIncome] = useState(0);

    useEffect(() => {
        const savedIncome = localStorage.getItem("income");
        if (savedIncome) {
        setIncome(parseFloat(savedIncome));
        }
    }, []);

  return (
    <div>
    <div className={`${styles.header} flex justify-evenly bg-[#1e293b]`}>
        <button className={`${styles.button} ${styles.expense}`} onClick={handleUpdateIncomeShow}>
            <h4>₦{income}</h4>
            <p>Monthly Income</p>
        </button>
        <button className={`${styles.button} ${styles.expense}`} onClick={handleNewTransactShow}>
            <h4><ExpenseCalc expenses={expenses} /></h4>
            <p>Expenses</p>
        </button>
        <div className={`${styles.button}`} >
            <h4><BalanceCalc expenses={expenses} income={income} /></h4>
            <p>Balance</p>
        </div>
        <div className={`${styles.button}`}>
            <h4><ExpenseCount expenses={expenses} /></h4>
            <p>Transactions</p>
        </div>
    </div>
    
        {showModal && (
            <div className={`fixed inset-0 ${styles.modalBackground} flex flex-col items-center justify-center`}>
                <p onClick={handleNewTransactClose} className="text-white cursor-pointer">Close</p>
                <NewTransact setExpenses={setExpenses} />
            </div>)}

        {showUpdateIncome && (
        <div className={`fixed inset-0 ${styles.modalBackground} flex flex-col items-center justify-center`}>
            <p onClick={handleUpdateIncomeClose} className="text-white cursor-pointer">Close</p>
            <UpdateIncome setIncome={setIncome} />
        </div>)}
    </div>
  )
}

export default Header