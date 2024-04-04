import styled from 'styled-components'

export const Container = styled.div`
	padding: var(--mainContentPadding);
	max-width: var(--maxWidth);
	min-width: 380px;
	display: flex;
	flex-direction: column;
	gap: 12px;
`

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 24px;
`
