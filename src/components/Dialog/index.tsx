import React, { Fragment, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import styles from './index.module.scss'

const useDialog = () => {
	const backdropRef = useRef<HTMLDivElement>(null)
	const dialogRef = useRef<HTMLDivElement>(null)
	const [visible, setVisible] = useState(false)

	useLayoutEffect(() => {
		closeDialog()
	}, [])
	console.log('render', visible)

	const openDialog = () => {
		dialogRef.current!.style.display = 'flex'
		backdropRef.current!.style.display = 'block'
		setVisible(true)
	}
	const closeDialog = () => {
		dialogRef.current!.style.display = 'none'
		backdropRef.current!.style.display = 'none'
		setVisible(false)
	}

	const backdropClick = () => {
		closeDialog()
	}

	const DialogView = useCallback(
		() => (
			<Fragment>
				<div className={styles.dialogCon} ref={dialogRef}>
					<div className={styles.dialog}>111</div>
				</div>
				<div className={styles.backdrop} ref={backdropRef} onClick={backdropClick} />
			</Fragment>
		),
		[],
	)

	return {
		openDialog,
		closeDialog,
		DialogView,
		visible,
	}
}

export default useDialog
