import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './InitPop.module.css'

const InitPop = () => {
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [income, setIncome] = useState("");

    const handleSave = () => {
        // Submit form data
        localStorage.setItem("name", name);
        localStorage.setItem("income", income);
        // console.log("Saved:", { name, income });
        navigate('/home');
    };


  return (
    <div className={styles.container}>
        <h2 className='text-[40px] text-center '>Hello, there!</h2>
        <h4 className='text-[15px] text-center '>Welcome! Please, take a moment to fill out the following before proceeding:</h4>
        <div className={styles.container2}>
            <input className={styles.name}
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input className={styles.income}
                type="number"
                name="income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="Monthly Income"
            />
            <button className={styles.save} onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}

export default InitPop