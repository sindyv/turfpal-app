import { Container, InputField } from './SelectedWifi.styles'

import Card from '../../../../../UI/Card'
import Btn from '../../../../../UI/Btn'
import DataField from '../../../../../UI/DataField'

function SelectedWifi({
	bssid,
	wifiList,
	onChangePassword,
	onConnectWifi,
	wifiPassword,
}) {
	const wifiData = wifiList.filter((wifi) => wifi.bssid === bssid)[0]

	return (
		<Card>
			<Container>
				<DataField header={'SSID'} data={wifiData?.ssid} unit='' />
				<DataField
					header={'Signal'}
					data={wifiData?.signal}
					unit='dB'
				/>
				<DataField
					header={'Channel'}
					data={wifiData?.channel}
					unit=''
				/>
				<DataField
					header={'Encryption'}
					data={wifiData?.encryption_description}
					unit=''
				/>
			</Container>
			<Container>
				<InputField
					type='text'
					placeholder='Passphrase'
					value={wifiPassword}
					onChange={onChangePassword}
				/>
				<Btn selected={false} onClick={() => onConnectWifi()}>
					Connect
				</Btn>
			</Container>
		</Card>
	)
}

export default SelectedWifi
