import React from 'react'
import { useTranslation } from 'react-i18next'

import { Wrapper, CardContent, Header } from './Mode.styles'

import Card from '../../../UI/Card'

import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined'
import Btn from '../../../UI/Btn'

function Mode({ scheduleObject, onSelect }) {
	const handleClick = (value) => {
		onSelect({ cmd_schedule_value: value })
	}
	const { t } = useTranslation()

	return (
		<Wrapper>
			<Header>
				<LoopOutlinedIcon />
				{t('generic.mode')}
			</Header>
			<Card>
				<CardContent>
					<Btn
						selected={scheduleObject.cmd_schedule_value === 0}
						backgroundColorSelected={'var(--turfpalActiveBtn)'}
						backgroundColorDeselected={'var(--grey)'}
						textColorSelected={'var(--turfpalColor)'}
						textColorDeselected={'var(--turfpalColor)'}
						customFont={'var(--turfpalFontBold)'}
						onClick={() => handleClick(0)}
					>
						{t('generic.default')}
					</Btn>
					<Btn
						selected={scheduleObject.cmd_schedule_value === 1}
						backgroundColorSelected={'var(--turfpalActiveBtn)'}
						backgroundColorDeselected={'var(--grey)'}
						textColorSelected={'var(--turfpalColor)'}
						textColorDeselected={'var(--turfpalColor)'}
						customFont={'var(--turfpalFontBold)'}
						onClick={() => handleClick(1)}
					>
						{t('generic.summer')}
					</Btn>
					<Btn
						selected={scheduleObject.cmd_schedule_value === 2}
						backgroundColorSelected={'var(--turfpalActiveBtn)'}
						backgroundColorDeselected={'var(--grey)'}
						textColorSelected={'var(--turfpalColor)'}
						textColorDeselected={'var(--turfpalColor)'}
						customFont={'var(--turfpalFontBold)'}
						onClick={() => handleClick(2)}
					>
						{t('generic.winter')}
					</Btn>
					{/* <Btn
                        selected={scheduleObject.cmd_schedule_value === 3}
                        backgroundColorSelected={"var(--turfpalActiveBtn)"}
                        backgroundColorDeselected={"var(--grey)"}
                        textColorSelected={"var(--turfpalColor)"}
                        textColorDeselected={"var(--turfpalColor)"}
                        customFont={"var(--turfpalFontBold)"}
                        onClick={() => handleClick(3)}
                    >
                        Custom
                    </Btn> */}
				</CardContent>
			</Card>
		</Wrapper>
	)
}

export default Mode
