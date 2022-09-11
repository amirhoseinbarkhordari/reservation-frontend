import { Button, Container, Grid, styled, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import type { TicketProps } from "../../shared/types/TicketProps";

const CustomTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: "1.2rem",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
        margin: "3rem 0"
    },
    margin: "3rem 7rem"
}));

const XarbPayment: FunctionComponent<{ ticketInfo: TicketProps }> = (props) => {
    const CustomButton = styled(Button)(() => ({
        backgroundColor: props.ticketInfo.TicketColors.main,
        margin: "6rem 0",
        "&:hover": {
            background: props.ticketInfo.TicketColors.dark
        }
    }));

    return (
        <Grid container >
            <Grid item md={8} xs={12}>
                <CustomTypography>By purchasing directly from Xarb NFT marketplace, not only you would get a 10% off on the course, but this way, you’ll complete your registration by collecting the NFT on it. Owning the NFT of each course comes with its own specific utilities and pros for the owner. If you already have a wallet and owe the desired amount of MATRIC cryptocurrency, this choice is the most ideal for you.</CustomTypography>
                <CustomButton href="https://xarb.io">Buy</CustomButton>
            </Grid>
        </Grid>
    )
}

export default XarbPayment;
