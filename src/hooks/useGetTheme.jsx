import { createTheme } from "@mui/material/styles"

const useGetTheme = () => {
    return createTheme({
        palette: {
            custom: {
                main: "#fff",
                contrastText: "#242105",
            },
            whiteBackground: {
                main: "#004e41",
                contrastText: "#242105",
            },
        },
    })
}

export default useGetTheme
