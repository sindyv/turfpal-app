import React from 'react'
import { useTranslation } from 'react-i18next'

// Styles
import { Wrapper } from './Help.styles'

function Help() {
	const { t } = useTranslation()
	return (
		<Wrapper>
			<h3>{t('information.help.helpTitle')}</h3>
			<p>{t('information.help.helpText')}</p>
			<p>
				{t('generic.phone')} : {t('information.help.helpPhone')}
				<br />
				{t('generic.email')} :{' '}
				<a href='mailto:service@ra-tls.com'>
					{t('information.help.helpEmail')}
				</a>
			</p>
		</Wrapper>
	)
}

export default Help
