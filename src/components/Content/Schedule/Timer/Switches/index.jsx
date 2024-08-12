import React from "react"
import { useTranslation } from "react-i18next"
import Card from "../../../../UI/Card"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import { Switch } from "@mui/material"
import { CardHeader, CardContent, SwitchField } from "./Switches.styles"

function Switches({ onSetState, states, allValues }) {
	const { t } = useTranslation()
	return (
		<Card>
			<CardHeader>
				<AutorenewOutlinedIcon />
				{t("generic.action")}
			</CardHeader>
			<CardContent>
				<SwitchField>
					{t("light.lighting")}
					<Switch
						disabled={allValues.statuses.timer_active}
						checked={states.lighting}
						color="whiteBackground"
						size="small"
						onChange={() => onSetState("lighting", !states.lighting)}
					/>
				</SwitchField>
				<SwitchField>
					{t("heat.heating")}
					<Switch
						disabled={allValues.statuses.timer_active}
						color="whiteBackground"
						size="small"
						checked={states.heating}
						onChange={() => onSetState("heating", !states.heating)}
					/>
				</SwitchField>
				{allValues?.statuses.hasOwnProperty("zone1_irrigation") ? (
					<SwitchField>
						{t("irrigation.irrigation")}
						<Switch
							disabled={allValues.statuses.timer_active}
							color="whiteBackground"
							size="small"
							checked={states.irrigation}
							onChange={() => onSetState("irrigation", !states.irrigation)}
						/>
					</SwitchField>
				) : null}
				{allValues?.statuses.hasOwnProperty("zone1_co2") ? (
					<SwitchField>
						Co2{" "}
						<Switch
							disabled={allValues.statuses.timer_active}
							color="whiteBackground"
							size="small"
							checked={states.co2}
							onChange={() => onSetState("co2", !states.co2)}
						/>
					</SwitchField>
				) : null}
			</CardContent>
		</Card>
	)
}

export default Switches
