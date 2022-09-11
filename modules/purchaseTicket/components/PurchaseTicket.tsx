import { Button, Container, Grid, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Theme } from "@mui/material";
import { FunctionComponent, useState } from "react";
import TicketCafeIcon from "../../shared/components/icons/TicketCafeIcon";
import type { TicketProps } from "../../shared/types/TicketProps";
import PaymentMethod from "./PaymentMethod";
import ShaparakPayment from "./ShaparakPayment";
import XarbPayment from "./XarbPayment";

const PurchaseContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "4.2rem 4.2rem 0 0",
    marginTop: "4.8rem"
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

const TicketContainer = styled("div")(({ theme }) => ({
    margin: "3rem 0 4rem 0",
    display: "flex",
    [theme.breakpoints.up("sm")]: {
        width: "70%",
    },
    width: "100%",
    justifyContent: "space-between"
}));

const PurchaseTicket: FunctionComponent<{ ticketTypes: TicketProps[], isMobile: boolean }> = (props) => {

    const ticketTypes = props.ticketTypes;
    const [ticketInfo, setTicketInfo] = useState<TicketProps>(ticketTypes[0]);
    const [paymentMethod, setPaymentMethod] = useState<string>("Xarb");

    const disableTicketColor = {
        light: "#D9D9D9",
        main: "#BDBDBD",
        dark: "#BDBDBD"
    }

    return (
        <PurchaseContainer>
            <CustomTypography variant="h3">Purchase the Ticket</CustomTypography>
            <Typography variant="h5" sx={{ fontSize: "1.8rem" }}>Tickets</Typography>
            <TicketContainer>
                {!!ticketTypes && ticketTypes.map((item) => {
                    return (
                        <div key={item.id} style={{ cursor: 'pointer' }} onClick={() => setTicketInfo(item)}>
                            <TicketCafeIcon fontSize={props.isMobile ? 7 : 20} color={(ticketInfo.id == item.id) ? item.TicketColors : disableTicketColor} />
                        </div>
                    )
                })
                }
            </TicketContainer>
            <Typography variant="h5" sx={{ fontSize: "1.8rem" }}>Payment Methods</Typography>
            <PaymentMethod ticketInfo={ticketInfo} setPaymentMethod={setPaymentMethod} paymentMethod={paymentMethod} />
            {!!paymentMethod && (paymentMethod == "Shaparak") ?
                <ShaparakPayment ticketInfo={ticketInfo} isMobile={props.isMobile} />
                :
                <XarbPayment ticketInfo={ticketInfo} />
            }

        </PurchaseContainer >
    )
}

export default PurchaseTicket;