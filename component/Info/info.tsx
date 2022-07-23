import React from 'react';
import styles from '../../styles/Info.module.css';

export default function Info(): JSX.Element {
    return (
        <>
	<div className={styles.fadeInDown}>
		<div className={styles.tContent}>
			<div className={styles.tf}>
				<div className={styles.tfText}>
					<a href="https://wa.me/0524563229" target="_blank">
						שלח הודעה
					</a>
				</div>
			</div>
			<div className={styles.ts}>
				<div className={styles.tsText}>
					<a href='tel:0524563229'>
						חייג
					</a>
				</div>
			</div>
		</div>
	</div>
        </>
    )
}