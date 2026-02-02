import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './NewTransact.module.css'

const NewTransact = ({ setExpenses }) => {
    const navigate = useNavigate();
    
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    //const [expenses, setExpenses] = useState([]);

    const handleSave = () => {
        if (!amount || !description || !category || !selectedDate) return;
        
        const newExpense = {
            id: Date.now(),
            amount: Number(amount),
            description,
            category,
            date: selectedDate,
        };
        
        setExpenses(prev => [...prev, newExpense]);
        // const updatedExpenses = [...expenses, newExpense];
    
        // setExpenses(updatedExpenses);
        // localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    
        // Clearing the form
        setAmount("");
        setDescription("");
        setCategory("");
        setSelectedDate("");

        alert("Transaction saved successfully! You can close this window.");
    };


  return (
    <div className={styles.container}>
        <h2 className='text-[40px] text-center '>New Transaction</h2>
        <div className={styles.container2}>
            <input
                className={styles.income}
                type="number"
                name="amount"
                value={amount}
                placeholder="Amount"
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                className={styles.name}
                type="text"
                name="description"
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            />

            <select
                className={styles.expense}
                name="expense"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Expense</option>
                <option value="rent">Rent</option>
                <option value="personal">Personal Growth</option>
                <option value="food">Food</option>
                <option value="recreation">Recreation</option>
            </select>

            <input
                className={styles.date}
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            />
            <button className={styles.save} onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}

export default NewTransact