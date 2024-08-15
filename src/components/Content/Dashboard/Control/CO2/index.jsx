import React, { useContext } from "react"

// Styles
import {
	Wrapper,
	ButtonsArea,
	TileArea,
	LinkItem,
	CardDescription,
	LinkWrappers,
} from "./CO2.styles"

//Components
import Btn from "../../../../UI/Btn"
import ControlTile from "../../../../UI/ControlTile"
import Card from "../../../../UI/Card"

// Icons
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined"

// Context
import { AllValuesContext } from "../../../../../store/context/allValues-context"
import useLoginContext from "../../../../../hooks/useLoginContext"
import { useTranslation } from "react-i18next"

function CO2() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const { user } = useLoginContext()
	const { t } = useTranslation()

	const handleSetModeAuto = () => {
		onCommand({
			commands: { co2_auto: true, co2_manual: false },
		})
	}

	const handleSetModeManual = () => {
		onCommand({
			commands: { co2_auto: false, co2_manual: true },
		})
	}

	const handleToggle = (state) => {
		onCommand({
			commands: {
				co2: state,
			},
		})
	}

	return (
		<Wrapper>
			{allValues.statuses.session &&
			allValues.statuses.mode === "auto" ? null : (
				<ButtonsArea>
					<Btn
						selected={allValues.statuses?.mode_co2 === "auto"}
						onClick={handleSetModeAuto}
					>
						<AutorenewOutlinedIcon /> {t("generic.auto")}
					</Btn>
					<Btn
						svgSize={12}
						selected={allValues.statuses?.mode_co2 === "manual"}
						onClick={handleSetModeManual}
					>
						<BackHandOutlinedIcon /> {t("generic.manual")}
					</Btn>
				</ButtonsArea>
			)}
			{allValues.statuses.mode_heating === "manual" && (
				<ButtonsArea $control={true}>
					<Btn
						selected={allValues.statuses.co2}
						onClick={() => handleToggle(true)}
						backgroundColorDeselected={"var(--lightGrey)"}
						backgroundColorSelected={"var(--turfpalActiveBtn)"}
						textColorSelected={"black"}
						textColorDeselected={"black"}
					>
						{/* <AutorenewOutlinedIcon /> */}
						{t("generic.on")}
					</Btn>
					<Btn
						svgSize={12}
						selected={!allValues.statuses.co2}
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
					enabled={allValues.statuses.co2_valve}
					icon={CloudOutlinedIcon}
					title={t("co2.co2")}
					data={{
						value: allValues.values["co2"],
						valueUnit: "ppm",
						additionalData: [
							null,
							allValues.values?.co2_valve_rh ?? 0, // allValues.values["co2_consumption"],
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
						log: "CO2",
						headerText: `${t("co2.co2")} > ${t("generic.log")}`,
						logData: allValues?.logData?.co2 ?? null,
					}}
				>
					<Card>
						<CardDescription>
							<InfoOutlinedIcon />
							{t("generic.log")}
						</CardDescription>
					</Card>
				</LinkItem>
				{user === "admin" ? (
					<LinkItem
						to={"settings"}
						state={{ headerText: `${t("co2.co2")} > ${t("generic.settings")}` }}
					>
						<Card>
							<CardDescription>
								<SettingsOutlinedIcon />
								{t("generic.settings")}
							</CardDescription>
						</Card>
					</LinkItem>
				) : null}
			</LinkWrappers>
		</Wrapper>
	)
}

export default CO2
