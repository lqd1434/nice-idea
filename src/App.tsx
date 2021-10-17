import React from 'react'
import { CircleLoading1, CircleLoading2, OverLayer, PulseLoading } from './components/CircleLoading'
import styles from './app.module.scss'
import useDialog from './components/Dialog'
function App() {
	const { DialogView, openDialog, visible } = useDialog()
	console.log(visible)
	return (
		<>
			<DialogView />
			<button onClick={openDialog}>open</button>
		</>
	)
}

export default App
