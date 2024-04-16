import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Header, Content } from './RouterDetails.styles'
import Card from '../../../../../UI/Card'
import DataField from '../../../../../UI/DataField'

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

function RouterDetails({ mobileInterface }) {
	const { t } = useTranslation()
	// const { data: allValues } = useContext(AllValuesContext)
	const outgoingTraffic = parseFloat(
		mobileInterface.tx_bytes / (1024 * 1024)
	).toFixed(1)
	const incomingTraffic = parseFloat(
		mobileInterface.rx_bytes / (1024 * 1024)
	).toFixed(1)
	return (
		<Card>
			<Container>
				<Header>
					<InfoOutlinedIcon />
					{t(
						'information.information.connectivity.mobile.settings.mobileDetails'
					)}
				</Header>
				<Content>
					<DataField
						header={t(
							'information.information.connectivity.mobile.settings.id'
						)}
						data={mobileInterface.id}
						unit=''
					/>
					<DataField
						header={t(
							'information.information.connectivity.mobile.settings.simSlot'
						)}
						data={mobileInterface.sim}
						unit=''
					/>

					<DataField
						header={t(
							'information.information.connectivity.mobile.settings.outgoingTraffic'
						)}
						data={outgoingTraffic}
						unit='Mb'
					/>
					<DataField
						header={t(
							'information.information.connectivity.mobile.settings.incomingTraffic'
						)}
						data={incomingTraffic}
						unit='Mb'
					/>
				</Content>
			</Container>
		</Card>
	)
}

export default RouterDetails
