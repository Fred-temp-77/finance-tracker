import React from 'react'
import { useEffect, useState } from "react";
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import NewTransact from '../NewTransact/NewTransact';
import ExpenseCalc from '../../Functions/ExpenseCalc';
import ExpenseCount from '../../Functions/ExpenseCount';
import BalanceCalc from '../../Functions/BalanceCalc';

const Header = () => {
    const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("expenses")) || [];
    });

    useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);


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
        <button className={`${styles.button}`} onClick=''>
            <h4>{income}</h4>
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
        <Link className={`${styles.button}`} to='/transactions'>
            <h4><ExpenseCount expenses={expenses} /></h4>
            <p>Transactions</p>
        </Link>
    </div>
        {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                <p onClick={handleNewTransactClose} className="text-white cursor-pointer">Close</p>
                <NewTransact setExpenses={setExpenses} />
            </div>)}
    </div>
  )
}

export default Header