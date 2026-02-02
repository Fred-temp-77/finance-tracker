import React from 'react'
import styles from './Layout.module.css'
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header.jsx';

const Layout = ({ main, side }) => {
  return (
    <div className={styles.layout}>
        <Link to="/" className={styles.title}>Finance Tracker</Link>
        <div className={styles.header}>
            <Header />
        </div>
        <div className={styles.main}>{main}</div>
        <div className={styles.side}>{side}</div>
    </div>
  )
}

export default Layout