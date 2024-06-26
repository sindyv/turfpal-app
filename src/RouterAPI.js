import axios from 'axios'

const url = `http://192.168.1.2:1880/router/api`

export default {
	login: async () => {
		const response = await fetch(`${url}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: 'admin',
				password: 'TurfpalDev1024',
			}),
		})

		const responseData = await response.json()

		if (!response.ok) {
			throw new Error('There was an error logging in')
		}

		return responseData
	},
	wifiScan: async (authToken) => {
		const response = await fetch(`${url}/wireless/actions/scan`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authToken}`,
			},
			body: JSON.stringify({
				data: {
					device: 'radio0', // 2.4Ghz networks. 'radio1' is 5Ghz.
				},
			}),
		})

		const responseData = await response.json()

		if (!response.ok) {
			throw new Error('There was an error scanning the WIFI')
		}

		return responseData
	},
	wifiJoin: async (authToken, wifiBssid, wifiPassword) => {
		const response = await fetch(`${url}/wireless/actions/join`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authToken}`,
			},
			body: JSON.stringify({
				data: {
					bssid: wifiBssid,
					password: wifiPassword,
					device: 'radio0', // 2.4Ghz networks. 'radio1' is 5Ghz.
				},
			}),
		})

		const responseData = await response.json()

		if (!response.ok) {
			throw new Error(`There was error an joing the WiFi`)
		}

		return responseData
	},
	wifiDelete: async (authToken, wifiId) => {
		const response = await fetch(
			`${url}/wireless/interfaces/config/${wifiId}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${authToken}`,
				},
			}
		)

		const responseData = await response.json()

		if (!response.ok) {
			throw new Error(`An error occured while deleting the network`)
		}

		return responseData
	},
	wifiConnect: async (authToken, wifiId, command) => {
		const response = await fetch(
			`${url}/wireless/interfaces/config/${wifiId}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${authToken}`,
				},
				body: JSON.stringify({
					data: {
						enabled: command ? '1' : '0',
					},
				}),
			}
		)

		const responseData = await response.json()

		if (!response.ok) {
			throw new Error(
				`There was an error ${
					command ? 'enabling' : 'disabling'
				} the connection`
			)
		}

		return responseData
	},
	wifiFetchInterfaces: async (authToken) => {
		const response = await fetch(`${url}/bulk`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authToken}`,
			},
			body: JSON.stringify({
				data: [
					{
						endpoint: '/api/wireless/interfaces/config',
						method: 'GET',
					},
					{
						endpoint: '/api/failover/interfaces/config',
						method: 'GET',
					},
				],
			}),
		})

		const responseData = await response.json()

		if (!response.ok) {
			throw new Error(`There was an error`)
		}

		return responseData
	},
	wifiFailoverEnabled: async (authToken, wifiId, command) => {
		const response = await fetch(
			`${url}/failover/interfaces/config/${wifiId}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${authToken}`,
				},
				body: JSON.stringify({
					data: {
						enabled: command ? '1' : '0',
					},
				}),
			}
		)

		const responseData = await response.json()

		if (!response.ok) {
			throw new Error(
				`There was an error ${
					command ? 'enabling' : 'disabling'
				} failover`
			)
		}

		return responseData
	},

	wifiGeneralRequest: async (authToken, apiUrl, method, data) => {
		const response = await fetch(`${url}${apiUrl}`, {
			method: `${method}`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${authToken}`,
			},
			body: JSON.stringify(data),
		})

		const responseData = await response.json()

		if (!response.ok) {
			throw new Error(`There was an error handeling your request m8. `)
		}

		return responseData
	},
	bulkFetch: async (authToken, endpoints = []) => {
		try {
			const result = await fetch(`${url}/bulk`, {
				method: `POST`,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${authToken}`,
				},
				body: JSON.stringify({
					data: endpoints,
				}),
			})

			if (!result.ok) {
				throw new Error(
					`There was an error handeling your request m8. `
				)
			}

			const responseData = result.json()

			return responseData
		} catch (error) {
			console.log(error)
		}
	},
}
