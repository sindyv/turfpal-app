import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkItem = styled(Link)`
	text-decoration: none;
	color: black;
`

export const Wrapper = styled.div`
	padding: var(--mainContentPadding);
	width: 100%;
	max-width: var(--maxWidth);
	overflow-y: auto;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;

	gap: 24px;
	h3 {
		margin: 0;
		padding: 0;
	}

	p {
		margin: 0;
		padding: 0;
	}
`

export const CenteredDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const CardContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: var(--fontSuperSmall);
`

export const CardDescription = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	font-family: var(--turfpalFontBold);

	svg {
		color: var(--turfpalColor);
	}
`

export const ButtonArea = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
`
