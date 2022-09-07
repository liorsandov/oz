import { IconButton } from '@mui/material';
import React from 'react';
import styles from '../../styles/Info.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Info(): JSX.Element {
	return (
		<>
			{/* <div className={styles.fadeInDown}> */}
			<div className={styles.fadeInUp}>
				<div className={styles.tContent}>
					<div className={styles.tf}>
						{/* <a href="https://wa.me/0544736161" target="_blank"> */}
						<a href="https://wa.me/0544736161">
							<div className={styles.tsInner}>
								<span className={styles.tfText}>
									לשליחת הודעה
								</span>
								<IconButton>
									<WhatsAppIcon />
								</IconButton>
							</div>
						</a>
					</div>
					<div className={styles.ts}>
						<a href='tel:0544736161'>
							<div className={styles.tsInner}>
								<span className={styles.tsText}>
									לחיוג
								</span>
								<IconButton>
									<PhoneIcon />
								</IconButton>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}