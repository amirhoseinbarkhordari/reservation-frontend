import { createTheme } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
    interface Palette {
        golden: Palette["primary"];
        silver: Palette["primary"];
        bronze: Palette["primary"];
        iconList: Palette["primary"];
    }

    interface PaletteOptions {
        golden: PaletteOptions["primary"];
        silver: PaletteOptions["primary"];
        bronze: PaletteOptions["primary"];
        iconList: PaletteOptions["primary"];
    }
}

export default createTheme({
    direction: "ltr",
    typography: {
        fontFamily: "Gilroy",
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
        }
    },
    shape: {
        borderRadius: 15,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "Gilroy",
                    borderRadius: "1rem",
                    fontSize: "1.5rem",
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
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: "2px solid #DDDDDD",
                },
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
                    width: 91,
                    height: 91
                },
            },
        }
    },
})