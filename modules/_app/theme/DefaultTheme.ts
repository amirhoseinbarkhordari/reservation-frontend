import { createTheme } from "@mui/material";
import getLanguageDir from "../../l10n/services/getLanguageDir/getLanguageDir";

declare module "@mui/material/styles/createPalette" {
    interface Palette {
        golden: Palette["primary"];
        silver: Palette["primary"];
        bronze: Palette["primary"];
        iconList: Palette["primary"];
        login: Palette["primary"];
    }

    interface PaletteOptions {
        golden: PaletteOptions["primary"];
        silver: PaletteOptions["primary"];
        bronze: PaletteOptions["primary"];
        iconList: PaletteOptions["primary"];
        login: PaletteOptions["primary"];
    }
}

export default (locale: string) => createTheme({
    direction: getLanguageDir(locale),
    typography: {
        fontFamily: "Peyda, Gilroy",
        fontSize: 14,
        h1: {
            fontWeight: 700,
            fontSize: "2.76rem",
            color: "#24282E",
        },
        h2: {
            fontWeight: 700,
            fontSize: "1.2rem",
            color: "#000000",
        },
        h3: {
            fontWeight: 600,
            fontSize: "1.2rem",
            color: "#000000",
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.68rem",
            color: "#2F2F2F",
        },
        h5: {
            fontWeight: 500,
            fontSize: "1.2rem",
            color: "#000000",
        },
        h6: {
            fontWeight: 500,
            fontSize: "1.2rem",
            color: "#767676",
        },
    },
    palette: {
        primary: {
            main: "#D9D9D9",
            dark: "#BDBDBD",
        },
        secondary: {
            main: "#F6F6F6",
            dark: "#F7F7F7"
        },
        error: {
            main: "#FF4242",
        },
        background: {
            default: "#fff",
            paper: "#fff",
        },
        golden: {
            main: "#AB9454",
            dark: "#877542",
        },
        silver: {
            main: "#A3A3A3",
            dark: "#858585",
        },
        bronze: {
            main: "#AE845C",
            dark: "#846242",
        },
        text: {
            primary: "#1D1D1D",
        },
        iconList: {
            light: "#C5C5C5",
            main: "#1D1D1D",
        },
        login: {
            main: "#4CAF50"
        }
    },
    shape: {
        borderRadius: 15,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "Peyda, Gilroy",
                    borderRadius: "1rem",
                    height: "4rem",
                    color: "white",
                    width: "100%",
                    fontWeight: 700,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: "1.5rem",
                    color: "#2F2F2F",
                    fontWeight: 600,
                    margin: "2rem 0 0.2rem 0.8rem",
                }
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
            },
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    justifyContent: "center",
                    marginTop: 1
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    width: 80,
                    height: 80
                },
            },
        }
    },
})