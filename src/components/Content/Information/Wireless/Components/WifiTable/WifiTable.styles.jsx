import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`

export const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		font-size: var(--fontSuperSmall);
		display: flex;
		align-items: center;
		svg {
			height: 18px;
		}
	}
`
