import React, { useState, useEffect } from 'react'
import styles from './UpdateIncome.module.css'

const UpdateIncome = ({ setIncome }) => {
  const [incomeInput, setIncomeInput] = useState("");

  const handleSave = () => {
    if (!incomeInput) return;

    setIncome(Number(incomeInput));
    setIncomeInput("");

    alert("Income saved successfully! You can close this window.");
  };

  return (
    <div className={styles.container}>
        <h2 className={'text-[40px] text-center '}>Update Income</h2>
        <div className={styles.container2}>
            <input
                className={styles.income}
                type="number"
                name="income"
                value={incomeInput}
                placeholder="Monthly Income"
                onChange={(e) => setIncomeInput(e.target.value)}
            />
            <button className={styles.save} onClick={handleSave}>Update</button>
        </div>
    </div>
  )
}

export default UpdateIncome