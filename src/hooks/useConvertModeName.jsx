export default function useConvertModeName(mode) {
    let activeSetpoints = ""

    switch (mode) {
        case "default":
            activeSetpoints = "Default"
            break

        case "user_defined1":
            activeSetpoints = "Summer"
            break

        case "user_defined2":
            activeSetpoints = "Winter"
            break

        case "user_defined3":
            activeSetpoints = "Custom"
            break
    }

    return activeSetpoints
}
