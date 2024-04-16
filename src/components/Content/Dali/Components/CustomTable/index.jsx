import React, { useContext, useEffect, useState } from 'react'

import { Table, Tr, Td, Th } from './Table.styles'

import DaliAPI from '../../../../../DaliAPI'

import { DaliConfiguratorContext } from '../../../../../store/context/daliConfigurator-context'
import { useTranslation } from 'react-i18next'

function CustomTable({ data }) {
	const daliCtx = useContext(DaliConfiguratorContext)

	useEffect(() => {
		daliCtx.getDevices()
	}, [])

	const handleRowClick = (id, value) => {
		daliCtx.controlDevice(id, value)
		daliCtx.handleSelectedEcgs(id)
	}

	// console.log(daliCtx)
	const { t } = useTranslation()
	if (daliCtx?.devices?.devices?.length > 0) {
		return (
			<Table>
				<thead>
					<Tr>
						<Th>{t('information.daliSettings.toggle')}</Th>
						<Th>{t('information.daliSettings.address')}</Th>
						<Th>{t('information.daliSettings.name')}</Th>
						<Th>{t('information.daliSettings.groups')}</Th>
					</Tr>
				</thead>
				<tbody>
					{daliCtx.devices.devices.map((device) => {
						const isChecked =
							daliCtx.selected.indexOf(device.id) !== -1
						return (
							<Tr key={device.id}>
								<Td>
									<input
										type='checkbox'
										checked={isChecked}
										onChange={() =>
											handleRowClick(
												device.id,
												!isChecked
											)
										}
									/>
								</Td>
								<Td>{device.address}</Td>
								<Td>{device.name}</Td>
								<Td>{device.groups}</Td>
							</Tr>
						)
					})}
				</tbody>
			</Table>
		)
	} else {
		return null
	}
}

export default CustomTable
