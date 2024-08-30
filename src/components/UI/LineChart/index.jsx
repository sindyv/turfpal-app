import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart'

function LineChart({ color, label, data, min = 0 }) {
	return (
		<div>
			<MuiLineChart
				xAxis={[{ scaleType: 'point', data: data.timestamps }]}
				yAxis={[{ min: min }]}
				series={[
					{
						data: data.values,
						label: label,
						color: color,
						showMark: false,
					},
				]}
				width={380}
				height={300}
			/>
		</div>
	)
}

export default LineChart
