import React from 'react'
import styles from '../styles/MySong.module.css'
import type { NextPage } from 'next'
import Navbar from '../component/Navbar'
import Info from '../component/Info/info';


const Home: NextPage = () => {
  return (
    <div>
        <div className={styles.navbar}>
						<Navbar />
        </div>
        <div className={styles.mainTitle}>
          <span>
          🔊 שירים שלי 🔊
          </span>
        </div>
        <Info />
    </div>
  )
};

export default Home