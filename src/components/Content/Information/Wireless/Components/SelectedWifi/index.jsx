import { Container, InputField } from './SelectedWifi.styles'
import { useTranslation } from 'react-i18next'

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
	const { t } = useTranslation()

	return (
		<Card>
			<Container>
				<DataField header={'SSID'} data={wifiData?.ssid} unit='' />
				<DataField
					header={t(
						'information.information.connectivity.wireless.settings.signal'
					)}
					data={wifiData?.signal}
					unit='dB'
				/>
				<DataField
					header={t(
						'information.information.connectivity.wireless.settings.channel'
					)}
					data={wifiData?.channel}
					unit=''
				/>
				<DataField
					header={t(
						'information.information.connectivity.wireless.settings.encryption'
					)}
					data={wifiData?.encryption_description}
					unit=''
				/>
			</Container>
			<Container>
				<InputField
					type='text'
					placeholder={t(
						'information.information.connectivity.wireless.settings.passphrase'
					)}
					value={wifiPassword}
					onChange={onChangePassword}
				/>
				<Btn selected={false} onClick={() => onConnectWifi()}>
					{t(
						'information.information.connectivity.wireless.settings.connect'
					)}
				</Btn>
			</Container>
		</Card>
	)
}

export default SelectedWifi
