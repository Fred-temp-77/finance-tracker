import React, { useState, useEffect } from 'react'
import Greeting from '../../Functions/Greetings';
import styles from './Card.module.css'

const Card = () => {

  const [name, setName] = useState("");
  
    useEffect(() => {
      const savedName = localStorage.getItem("name");
      if (savedName) {
        setName(savedName);
      }
    }, []);

  return (
    <div className={`${styles.card} w-[200px] h-[200px] rounded-[10px] flex flex-col justify-center items-center text-white gap-4`}>
        <div className={`${styles.card2} flex flex-col justify-center items-center text-white gap-2`}>
            <Greeting />
            <h3>{name}</h3>
        </div>
    </div>
  )
}

export default Card