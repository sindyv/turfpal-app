import { useContext } from 'react'
import { Container, Header, Content } from './RouterDetails.styles'
import Card from '../../../../../UI/Card'
import DataField from '../../../../../UI/DataField'

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

function RouterDetails({ mobileInterface }) {
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
					Mobile Details
				</Header>
				<Content>
					<DataField
						header={'ID'}
						data={mobileInterface.id}
						unit=''
					/>
					<DataField
						header={'SIM Slot'}
						data={mobileInterface.sim}
						unit=''
					/>

					<DataField
						header={'Outgoing traffic'}
						data={outgoingTraffic}
						unit='Mb'
					/>
					<DataField
						header={'Incoming trafic'}
						data={incomingTraffic}
						unit='Mb'
					/>
				</Content>
			</Container>
		</Card>
	)
}

export default RouterDetails
