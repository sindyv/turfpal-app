import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;

	input {
		border: 1px solid rgba(0, 0, 0, 0.25);
		border-radius: 4px;
		color: rgba(0, 0, 0, 0.7);
		padding: 5px;
	}

	select {
		border: 1px solid rgba(0, 0, 0, 0.25);
		border-radius: 4px;
		padding: 4px;
		color: rgba(0, 0, 0, 0.7);
	}

	.input-field {
		display: flex;
		flex-direction: column;
	}

	.custom-apn-field {
		display: flex;
		align-items: center;
		gap: 12px;
	}
`

export const Title = styled.label`
	font-size: var(--fontTiny);
`
