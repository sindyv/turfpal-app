import { Container } from './SelectedWifi.styles'

import Card from '../../../../../UI/Card'
import Btn from '../../../../../UI/Btn'

function SelectedWifi({ bssid, wifiList }) {
	const wifiData = wifiList.filter((wifi) => wifi.bssid === bssid)

	console.log(wifiData)

	return (
		<Card>
			{/* <Btn
				selected={false}
				backgroundColorDeselected={'var(--lightGrey)'}
				backgroundColorSelected={'var(--turfpalActiveBtn)'}
				textColorSelected={'black'}
				textColorDeselected={'black'}
			>
				Connect
			</Btn>
			<Btn
				selected={false}
				backgroundColorDeselected={'var(--lightGrey)'}
				backgroundColorSelected={'var(--turfpalActiveBtn)'}
				textColorSelected={'black'}
				textColorDeselected={'black'}
			>
				Delete
			</Btn> */}
		</Card>
	)
}

export default SelectedWifi
