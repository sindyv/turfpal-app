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
