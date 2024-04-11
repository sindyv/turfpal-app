import { useContext, useEffect, useState } from 'react'
import { Container } from './Router.styles'

import RouterDetails from './Components/RouterDetails'
import Apn from './Components/Apn'

import { RouterContext } from '../../../../store/context/router-context'

function Router() {
	const routerCtx = useContext(RouterContext)

	useEffect(() => {
		if (routerCtx.loggedIn) {
			routerCtx.apnGetInfo()
		}
	}, [routerCtx.loggedIn])

	function handleChangeAutoApn(value) {
		routerCtx.apnToggleAuto(value)
	}

	function handleUpdateApn(customApn, selectedAuth, username, password) {
		routerCtx.apnUpdateApn(customApn, selectedAuth, username, password)
	}

	if (routerCtx.loading.loading) {
		return <p>{routerCtx.loading.loadText}</p>
	}

	return (
		<Container>
			{routerCtx.apnSim1.hasOwnProperty('id') && (
				<RouterDetails mobileInterface={routerCtx.apnSim1} />
			)}
			{routerCtx.apnData.hasOwnProperty('id') && (
				<Apn
					mobileInterface={routerCtx.apnSim1}
					apnList={routerCtx.apnList}
					onChangeAutoApn={handleChangeAutoApn}
					handleUpdateApn={handleUpdateApn}
					apnData={routerCtx.apnData}
				/>
			)}
		</Container>
	)
}

export default Router
