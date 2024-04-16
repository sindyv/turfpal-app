import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

// Styles
import { Wrapper, Content, CardContent, CardDescription } from './Device.styles'

// Components
import Card from '../../../UI/Card'
import InformationDataField from '../../../UI/DataField'
import { AllValuesContext } from '../../../../store/context/allValues-context'

//Icons
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined'

function Device() {
	const { data: allValues } = useContext(AllValuesContext)
	const { t } = useTranslation()

	return (
		<Wrapper>
			<Content>
				<Card>
					<CardDescription>
						<span>
							<SmartToyOutlinedIcon />{' '}
							{t('information.information.device.device')}
						</span>
						{/* <SettingsOutlinedIcon /> */}
					</CardDescription>
					<CardContent>
						<InformationDataField
							header={t('information.information.device.model')}
							data={allValues.rig_data.type}
						/>
						<InformationDataField
							header={t('information.information.device.serial')}
							data={allValues.rig_data.deviceid}
						/>
						<InformationDataField
							header={t(
								'information.information.device.firmware'
							)}
							data={allValues.rig_data.software_version}
						/>
						{/* <InformationDataField
                            header={"Manufactorer"}
                            data={allValues.rig_data.manufactorer}
                        />
                        <InformationDataField
                            header={"Manufacture date"}
                            data={allValues.rig_data.manufactor_date}
                        /> */}
					</CardContent>
				</Card>
			</Content>
		</Wrapper>
	)
}

export default Device
