import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container, Content, Row, Header } from './Apn.styles'

import ApnInputs from '../ApnInputs'

import { Switch } from '@mui/material'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import Card from '../../../../../UI/Card'
import DataField from '../../../../../UI/DataField'

function Apn({
	mobileInterface,
	apnList,
	onChangeAutoApn,
	handleUpdateApn,
	apnData,
}) {
	const { t } = useTranslation()
	const autoApn = apnData.auto_apn === '1'

	return (
		<Card>
			<Content>
				<Row>
					<span>
						<Header>
							<SettingsOutlinedIcon />

							{t(
								'information.information.connectivity.mobile.settings.apn'
							)}
						</Header>
					</span>
					<span className='failover'>
						<div>{t('generic.auto')}</div>
						<Switch
							checked={autoApn}
							size='small'
							onChange={(e) => onChangeAutoApn(e.target.checked)}
						/>
					</span>
				</Row>
				{autoApn ? (
					<Row>
						<DataField
							header={t(
								'information.information.connectivity.mobile.settings.apn'
							)}
							data={
								autoApn
									? Array.isArray(apnList)
										? apnList[0]?.apn
										: 'No APN detected'
									: mobileInterface.apn
							}
							unit=''
						/>
					</Row>
				) : null}
				{!autoApn ? (
					<Row>
						<ApnInputs
							apnList={apnList}
							onUpdateApn={handleUpdateApn}
							apnData={apnData}
						/>
					</Row>
				) : null}
			</Content>
		</Card>
	)
}

export default Apn
