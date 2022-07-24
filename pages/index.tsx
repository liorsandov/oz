import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Info from '../component/Info/info'
import Navbar from '../component/Navbar'
import styles from '../styles/Home.module.css'
import ozSing from '../public/oz.jpg';
import Link from 'next/link'

const Home: NextPage = () => {

	return (
		<>
			<Head>
				<title>עוז תירם - זמר</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.mainBody}>
				<div className={styles.navbar}>
					<Navbar />
				</div>
				<div className={styles.section} > 
					<div className={`${styles.sectionFirst}`}>

						<span className={`${styles.sectionFirstTitle} ${styles.lightSpeedIn}`}>
							עוז תירם
						</span>
						<div className={`${styles.imageContainer} ${styles.fadeIn}`}>
							<img
								src="oz.jpg"
								alt="Picture of the author"
								className={styles.imageOz}
							/>
						</div>
						<div className={`${styles.ctaContainer} ${styles.fadeInUp}`}>
							<div className={styles.cta}>
								<Link href={'/AboutMe'} key={'item.label'} passHref>
									<a>עלי</a>
								</Link>
							</div>
							<div className={styles.cta}>
								<Link href={'/MySong'} key={'item.label'} passHref>
									<a>שירים שלי</a>
								</Link>
							</div>
						</div>
					{/* <Info /> */}
					</div>
					<div className={`${styles.sectionSeconde}`}>
						<Info />
					</div>
					{/* <div className={`${styles.sectionTher}`}>
					</div> */}
				</div>
			</div>
		</>
	)
}

export default Home
