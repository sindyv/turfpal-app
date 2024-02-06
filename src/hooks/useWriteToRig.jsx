import { useContext } from "react"
import { AllValuesContext } from "../store/context/allValues-context"

function useWriteToRig() {
    const { onCommand, updateSetpointsCache } = useContext(AllValuesContext)

    const writeSetpoints = (setpoints, delay = 100) => {
        onCommand(
            {
                setpoints: {
                    ...setpoints,
                },
            },
            delay
        )
        updateSetpointsCache(setpoints)
    }

    const writeCommands = (commands, delay = 100) => {
        onCommand(
            {
                commands: {
                    ...commands,
                },
            },
            delay
        )
    }

    return { writeSetpoints, writeCommands }
}

export default useWriteToRig
