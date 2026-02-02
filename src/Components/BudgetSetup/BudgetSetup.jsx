import React, { useState, useEffect } from "react";
import styles from './BudgetSetup.module.css'

const BudgetSetup = () => {
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [budgets, setBudgets] = useState(() => {
        return JSON.parse(localStorage.getItem("budgets")) || {};
    });
    useEffect(() => {
        localStorage.setItem("budgets", JSON.stringify(budgets));
      }, [budgets]);
    
    const handleSave = () => {
    if (!category || !amount) return;

    setBudgets((prev) => ({
        ...prev,
        [category]: Number(amount),
    }));

    setCategory("");
    setAmount("");
    };

    return (
        <div className={styles.container}>
            <h2 className='text-[40px] text-center '>Set Budget Limit</h2>
            <div className={styles.container2}>
                <select
                    className={styles.expense}
                    name="expense"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select Expense</option>
                    <option value="rent">Rent</option>
                    <option value="personal">Personal Growth</option>
                    <option value="food">Food</option>
                    <option value="recreation">Recreation</option>
                </select>
                <input
                    className={styles.income}
                    type="number"
                    name="amount"
                    value={amount}
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button className={styles.save} onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default BudgetSetup