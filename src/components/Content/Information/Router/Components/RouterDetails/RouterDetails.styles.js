import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`

export const Header = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: var(--fontSuperSmall);
	font-family: var(--turfpalFontBold);
	svg {
		width: 18px;
		color: var(--turfpalColor);
	}
`

export const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
`
