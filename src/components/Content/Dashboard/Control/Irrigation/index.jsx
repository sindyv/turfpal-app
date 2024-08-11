import React, { useContext } from "react"

// Styles
import {
	Wrapper,
	ButtonsArea,
	TileArea,
	LinkItem,
	CardDescription,
	LinkWrappers,
} from "./Irrigation.styles"

//Components
import Btn from "../../../../UI/Btn"
import ControlTile from "../../../../UI/ControlTile"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined"

import Card from "../../../../UI/Card"

// Context
import { AllValuesContext } from "../../../../../store/context/allValues-context"
import { useTranslation } from "react-i18next"

function Irrigation({}) {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const { t } = useTranslation()

	const handleSetModeAuto = () => {
		onCommand(
			{
				commands: { irrigation_auto: true, irrigation_manual: false },
			},
			100
		)
	}

	const handleSetModeManual = () => {
		onCommand(
			{
				commands: { irrigation_auto: false, irrigation_manual: true },
			},
			100
		)
	}

	const handleToggle = (state) => {
		onCommand(
			{
				commands: {
					irrigation: state,
				},
			},
			100
		)

		console.log(state)
	}

	return (
		<Wrapper>
			{allValues.statuses.session &&
			allValues.statuses.mode_irrigation === "auto" ? null : (
				<ButtonsArea>
					<Btn
						selected={allValues.statuses.mode_irrigation === "auto"}
						onClick={handleSetModeAuto}
					>
						<AutorenewOutlinedIcon /> Auto
					</Btn>
					<Btn
						svgSize={12}
						selected={allValues.statuses.mode_irrigation === "manual"}
						onClick={handleSetModeManual}
					>
						<BackHandOutlinedIcon /> Manual
					</Btn>
				</ButtonsArea>
			)}
			{allValues.statuses.mode_irrigation === "manual" && (
				<ButtonsArea $control={true}>
					<Btn
						selected={allValues.statuses?.irrigation}
						onClick={() => handleToggle(true)}
						backgroundColorDeselected={"var(--lightGrey)"}
						backgroundColorSelected={"var(--turfpalActiveBtn)"}
						textColorSelected={"black"}
						textColorDeselected={"black"}
					>
						{/* <AutorenewOutlinedIcon />  */}
						{t("generic.on")}
					</Btn>
					<Btn
						svgSize={12}
						selected={!allValues.statuses.irrigation}
						backgroundColorDeselected={"var(--lightGrey)"}
						backgroundColorSelected={"var(--turfpalActiveBtn)"}
						textColorSelected={"black"}
						textColorDeselected={"black"}
						onClick={() => handleToggle(false)}
					>
						{/* <BackHandOutlinedIcon /> */}
						{t("generic.off")}
					</Btn>
				</ButtonsArea>
			)}
			<TileArea>
				<ControlTile
					disabled={true}
					changeState={handleToggle}
					enabled={allValues.statuses?.irrigation_valve}
					icon={WaterDropOutlinedIcon}
					title={"Irrigation"}
					data={{
						value: allValues.values["soil_moisture"],
						valueUnit: "%",
						additionalData: [
							null,
							allValues.values?.irrigation_valve_rh ?? 0, // allValues.values["co2_consumption"],
							// allValues.values.co2_rh,
						],
						additionalDataUnits: [null, "h"],
					}}
				/>
			</TileArea>
			<LinkWrappers>
				<LinkItem
					to={"/log"}
					state={{
						log: "Irrigation",
						headerText: `${t("irrigation.irrigation")} > ${t("generic.log")}`,
						logData: allValues?.logData?.irrigation ?? null,
					}}
				>
					<Card>
						<CardDescription>
							<InfoOutlinedIcon />
							Log
						</CardDescription>
					</Card>
				</LinkItem>

				<LinkItem
					to={"settings"}
					state={{ headerText: "Irrigation > Settings" }}
				>
					<Card>
						<CardDescription>
							<SettingsOutlinedIcon />
							Settings
						</CardDescription>
					</Card>
				</LinkItem>
			</LinkWrappers>
		</Wrapper>
	)
}

export default Irrigation
