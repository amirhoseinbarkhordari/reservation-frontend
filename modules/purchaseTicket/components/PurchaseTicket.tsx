import { Container, Grid, styled, Typography, } from "@mui/material";
import type { FunctionComponent } from "react";
import { useState } from "react";
import type { PaymentProps } from "../../shared/types/PaymentProps";
import type { TicketProps } from "../../shared/types/TicketProps";
import { PaymentMethodList } from "./PaymentMethodList";
import TicketTypes from "./TicketTypes";
import FormPayment from "./FormPayment";

const PurchaseContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "4.2rem 4.2rem 0 0",
    marginTop: "4.8rem",
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
    margin: "-1.8rem 0 4.36rem 0",
    fontSize: "3rem",
    letterSpacing: "0.1rem",
    [theme.breakpoints.down("sm")]: {
        margin: "-1.2rem 0 4.36rem 0",
        fontSize: "2rem",
    },
}));

const PurchaseTicket: FunctionComponent<{ ticketTypes: TicketProps[], isMobile: boolean }> = (props) => {
    const ismobile = props.isMobile;
    const [ticketInfo, setTicketInfo] = useState<TicketProps>(props.ticketTypes[0]);
    const [paymentMethod, setPaymentMethod] = useState<PaymentProps>(PaymentMethodList[0]);

    return (
        <PurchaseContainer>
            <CustomTypography variant="h3">Purchase the Ticket</CustomTypography>
            <Grid container sx={{ gap: "10rem" }}>
                {!ismobile &&
                    <Grid item md={5}>
                        <Typography variant="h5" sx={{ fontSize: "1.8rem" }}>Description</Typography>
                        <Typography variant="h5" sx={{ textAlign: "justify", fontWeight: 400, marginTop: "1.5rem" }}>
                            {paymentMethod.description}
                        </Typography>
                    </Grid>
                }
                <Grid item md={5}>
                    <Typography variant="h5" sx={{ textAlign: { xs: "center", md: "left" }, fontSize: "1.8rem" }}>Tickets</Typography>
                    <TicketTypes ticketTypes={props.ticketTypes} isMoblie={ismobile} setTicketInfo={setTicketInfo} ticketInfo={ticketInfo} />
                    <Typography variant="h5" sx={{ textAlign: { xs: "center", md: "left" }, fontSize: "1.8rem", marginBottom: "2rem" }}>Payment Methods</Typography>
                    <FormPayment isMobile={ismobile} paymentMethod={paymentMethod} ticketInfo={ticketInfo} setPaymentMethod={setPaymentMethod} />
                </Grid>
            </Grid >
        </PurchaseContainer >
    )
}

export default PurchaseTicket;
