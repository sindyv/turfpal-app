import styled from 'styled-components'

export const Container = styled.div`
	padding: var(--mainContentPadding);
	max-width: var(--maxWidth);
	min-width: 380px;
	display: flex;
	flex-direction: column;
	gap: 12px;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
`

export const Row = styled.div`
	font-size: var(--fontSuperSmall);
	display: flex;
	justify-content: space-between;
	gap: 12px;

	.failover {
		font-size: var(--fontSuperSmall);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	span {
		font-size: var(--fontBig);

		div {
			&:nth-child(2) {
				font-size: var(--fontSuperSmall);
			}
		}
	}
`

export const Header = styled.div`
	font-size: var(--fontSuperSmall);
	display: flex;
	align-items: center;
	gap: 8px;
	font-family: var(--turfpalFontBold);
	svg {
		width: 18px;
		color: var(--turfpalColor);
	}
`
