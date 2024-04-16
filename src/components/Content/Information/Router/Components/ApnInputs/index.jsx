import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Title } from './ApnInputs.styles'
import Btn from '../../../../../UI/Btn'
function ApnInputs({ apnList, onUpdateApn, apnData }) {
	const [selectedApn, setSelectedApn] = useState(
		apnData.apn !== '' ? 'custom' : ''
	)
	const [selectedAuth, setSelectedAuth] = useState(apnData.auth)
	const [customApn, setCustomApn] = useState(apnData.apn)
	const [username, setUsername] = useState(apnData.username)
	const [password, setPassword] = useState(apnData.password)
	const { t } = useTranslation()

	function handleInputs(value, setFn) {
		setFn(value)
	}

	function handleUpdateApn() {
		if (selectedAuth === 'none') {
			onUpdateApn(customApn, selectedAuth, '', '')
		} else {
			onUpdateApn(customApn, selectedAuth, username, password)
		}
	}

	return (
		<Container>
			<div className='input-field'>
				<Title>
					{t(
						'information.information.connectivity.mobile.settings.apn'
					)}
				</Title>
				<select
					value={selectedApn}
					onChange={(e) => setSelectedApn(e.target.value)}
				>
					{customApn !== '' ? (
						<option value={'custom'}>
							--{' '}
							{t(
								'information.information.connectivity.mobile.settings.custom'
							)}{' '}
							--
						</option>
					) : null}
					{apnList.map((listItem) => {
						return (
							<option key={listItem.id} value={listItem.id}>
								{listItem.apn}
							</option>
						)
					})}
					{customApn === '' ? (
						<option value={'custom'}>
							--{' '}
							{t(
								'information.information.connectivity.mobile.settings.custom'
							)}{' '}
							--
						</option>
					) : null}
				</select>
			</div>
			{selectedApn === 'custom' ? (
				<>
					<div className='custom-apn-field'>
						<div className='input-field'>
							<Title>
								{t(
									'information.information.connectivity.mobile.settings.customApn'
								)}
							</Title>
							<input
								type='text'
								name='apn'
								value={customApn}
								onChange={(e) =>
									handleInputs(e.target.value, setCustomApn)
								}
							/>
						</div>
						<div className='input-field'>
							<Title>
								{t(
									'information.information.connectivity.mobile.settings.authType'
								)}
							</Title>

							<select
								onChange={(e) =>
									setSelectedAuth(e.target.value)
								}
								value={selectedAuth}
							>
								<option value={'none'}>
									{t('generic.none')}
								</option>
								<option value={'pap'}>PAP</option>
								<option value={'chap'}>CHAP</option>
							</select>
						</div>
					</div>
					{selectedAuth !== 'none' ? (
						<div className='custom-apn-field'>
							<div className='input-field'>
								<Title>
									{t(
										'information.information.connectivity.mobile.settings.username'
									)}
								</Title>
								<input
									value={username}
									onChange={(e) =>
										handleInputs(
											e.target.value,
											setUsername
										)
									}
									type='text'
									name='username'
									placeholder='Username'
								/>
							</div>
							<div className='input-field'>
								<Title>
									{t(
										'information.information.connectivity.mobile.settings.password'
									)}
								</Title>
								<input
									value={password}
									onChange={(e) =>
										handleInputs(
											e.target.value,
											setPassword
										)
									}
									type='text'
									name='password'
									placeholder='Password'
								/>
							</div>
						</div>
					) : null}

					<Btn
						onClick={handleUpdateApn}
						backgroundColorDeselected={'var(--turfpalColor)'}
						textColorDeselected={'white'}
					>
						Save
					</Btn>
				</>
			) : null}
		</Container>
	)
}

export default ApnInputs
