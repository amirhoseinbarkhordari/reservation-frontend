import type { FunctionComponent } from "react";
import type { ChangeEvent } from "react";
import type { Style } from "util";
import type { TicketProps } from "../../shared/types/TicketProps";
import { Button, Grid, styled, Typography } from "@mui/material";
import LabeledCustomTextField from "../../shared/components/formElements/LabelCustomTextField";
import CustomTextField from "../../shared/components/formElements/CustomTextField";
import TicketCafeIcon from "../../shared/components/icons/TicketCafeIcon";

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

    const CustomButton = styled(Button)(() => ({
        backgroundColor: props.ticketInfo.TicketColors.main,
        margin: "6rem 0",
        "&:hover": {
            background: props.ticketInfo.TicketColors.dark
        }
    }));

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target);
    }

    return (
        <Grid container justifyContent="center" sx={{ margin: "2rem 0" }}>
            <Grid item xs={12} md={8}>
                <CustomTypography>If you choose Shaparak as your payment method for the course, you can complete the enrollment procedure using Rial currency. Although you wouldn’t buy the NFT of the course this way, you can make a wallet and enter your public address after the compilation, and the NFT gets transferred to you. This method is suitable for the ones who don’t currently have a wallet address and MATIC for their NFT purchase on Xarb.</CustomTypography>
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
                                    <TicketCafeIcon fontSize={7} color={props.ticketInfo.TicketColors} />
                                </Grid>
                            )
                        }
                    </Grid>
                    <Grid container sx={{ alignItems: "center" }}>
                        <Grid item md={8} xs={10}>
                            <LabeledCustomTextField id="TotalPrice" label="Total Price:" isNumber>
                                <span style={{ fontSize: "2rem", fontWeight: 700 }}>{props.ticketInfo.Price} IRR</span>
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
