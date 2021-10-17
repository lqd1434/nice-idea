import React from 'react'
import styles from './index.module.scss'

export const CircleLoading1 = () => {
	return (
		<div className={styles.con}>
			<div className={styles.ring}>
				<div className={styles.dot} />
			</div>
		</div>
	)
}

export const CircleLoading2 = () => {
	return <div className={styles.ringCircle} />
}

export const OverLayer = () => {
	return (
		<div>
			<div className={styles.overLayer}>OverLayer</div>
		</div>
	)
}

export const PulseLoading = () => {
	return (
		<div>
			<div className={styles.pulseLoading}>
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	)
}
