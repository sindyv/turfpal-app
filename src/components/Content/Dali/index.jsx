import React, { useEffect, useState } from 'react'
import { Container } from './Dali.Styles'

import DaliConfiguratorContextProvider from '../../../store/context/daliConfigurator-context'

import CustomTable from './Components/CustomTable'

import Addressing from './Components/Addressing'
import ControlAll from './Components/ControlAll'
import AssignGroup from './Components/AssignGroup'

import DaliAPI from '../../../DaliAPI'

function Dali() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [data, setData] = useState({})

	useEffect(() => {
		async function fetchData() {
			setLoading(true)

			try {
				const data = await DaliAPI.getDevices()
				setData(data)
			} catch (error) {
				setError(error || 'Failed to connect to DALI gateway')
			}

			setLoading(false)
		}

		fetchData()
	}, [])

	if (loading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>There was an error connecting to the DALI-gateway</p>
	}

	return (
		<DaliConfiguratorContextProvider>
			<Container>
				<Addressing />
				<ControlAll />
				<AssignGroup />
				<CustomTable />
			</Container>
		</DaliConfiguratorContextProvider>
	)
}

export default Dali
