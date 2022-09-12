import type { FunctionComponent } from "react";
import type { ChangeEvent } from "react";
import type { TicketProps } from "../../shared/types/TicketProps";
import { Button, Grid, PaletteColor, styled, Typography } from "@mui/material";
import LabeledCustomTextField from "../../shared/components/formElements/LabelCustomTextField";
import CustomTextField from "../../shared/components/formElements/CustomTextField";
import TicketCafeIcon from "../../shared/components/icons/ticketIcons/GoldenTicket";

const CustomTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: "1.2rem",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
        margin: "3rem 0"
    },
    margin: "3rem 7rem"
}));

const ShaparakPayment: FunctionComponent<{ ticketInfo: TicketProps, isMobile: boolean }> = (props) => {

    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: (theme.palette[props.ticketInfo.color] as PaletteColor).main,
        margin: "6rem 0",
        "&:hover": {
            background: (theme.palette[props.ticketInfo.color] as PaletteColor).dark
        }
    }));

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target);
    }

    return (


        <Grid container justifyContent="center" sx={{ margin: "2rem 0" }}>
            <Grid item xs={12} md={8}>
                <CustomTypography></CustomTypography>
                <form onSubmit={handleSubmit}>
                    <LabeledCustomTextField id="FullName" label="Full Name">
                        <CustomTextField
                            variant="outlined"
                            name="FullName"
                            id="FullName"
                            placeholder="e.g. `Amir Ramzali ...`"
                            // helperText={errors.description}
                            // error={!!errors.description}
                            fullWidth
                        />
                    </LabeledCustomTextField>
                    <LabeledCustomTextField id="Email" label="Email">
                        <CustomTextField
                            variant="outlined"
                            name="Email"
                            id="Email"
                            placeholder="e.g. `Example@gmail.com`"
                            // helperText={errors.description}
                            // error={!!errors.description}
                            fullWidth
                        />
                    </LabeledCustomTextField>
                    <Grid container sx={{ margin: "4rem 0 ", alignItems: "center" }}>
                        <Grid item md={8} xs={10}>
                            <LabeledCustomTextField id="Quantity" label="Quantity" isNumber>
                                <CustomTextField
                                    variant="outlined"
                                    type="number"
                                    name="Quantity"
                                    id="Quantity"
                                    // helperText={errors.description}
                                    // error={!!errors.description}
                                    fullWidth
                                />
                            </LabeledCustomTextField>
                        </Grid>
                        {
                            !props.isMobile && (
                                <Grid item md={2} sx={{ textAlign: "center" }}>
                                    <TicketCafeIcon fontSize={7} />
                                </Grid>
                            )
                        }
                    </Grid>
                    <Grid container sx={{ alignItems: "center" }}>
                        <Grid item md={8} xs={10}>
                            <LabeledCustomTextField id="TotalPrice" label="Total Price:" isNumber>
                                <span style={{ fontSize: "2rem", fontWeight: 700 }}>{props.ticketInfo.price} IRR</span>
                            </LabeledCustomTextField>
                        </Grid>
                    </Grid>
                    <CustomButton type="submit">Buy</CustomButton>
                </form>
            </Grid>
        </Grid >
    )
}
export default ShaparakPayment;
