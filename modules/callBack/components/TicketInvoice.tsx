import type { FunctionComponent } from "react";
import { Grid, PaletteColor, styled, Typography, useTheme } from "@mui/material";
import { InvoiceDetailProps } from "../../shared/types/InvoiceDetailProps";
import { TicketTypes } from "../../shared/components/TicketTypes";
import Image from "next/image";
import QrCode from "../../../__MOCK__/images/qr-code.png";

const ImageContainer = styled('div')({
    padding: "5% 20%",
    position: "relative",
    "& > span": {

    }
})

const CustomDiv = styled("div")(({ theme }) => ({
    position: "relative",
    borderRight: "4px solid #000000",
    height: "100%",
    "&:after": {
        content: "''",
        backgroundColor: theme.palette.secondary.main,
        position: "absolute",
        borderRadius: "50%",
        [theme.breakpoints.down("md")]: {
            width: "30px",
            height: "30px",
            right: -17,
            bottom: -15
        },
        width: "50px",
        height: "50px",
        right: -27,
        borderTop: "3px solid black",
        bottom: -25
    },
    "&:before": {
        content: "''",
        backgroundColor: theme.palette.secondary.main,
        position: "absolute",
        borderRadius: "50%",
        [theme.breakpoints.down("md")]: {
            width: "30px",
            height: "30px",
            right: -17,
            top: -15
        },
        width: "50px",
        height: "50px",
        right: -27,
        borderBottom: "3px solid black",
        top: -25
    },
}));

const TicketInvoice: FunctionComponent<{ invoiceDetail: InvoiceDetailProps }> = (props) => {
    const invoiceDetail = props.invoiceDetail;
    const typeTicket = invoiceDetail.data.productParents.find((item) => (!!item.displayStyle))?.displayStyle;
    const ticketInfo = TicketTypes.find((item) => (item.typeTicket.toLowerCase() == typeTicket?.toLowerCase()));
    const updatedTime = invoiceDetail.data.updatedAt?.split(/^([\d-]+)\w{1}([\d:]+).*$/)
    const theme = useTheme();

    return (
        <Grid container sx={{
            width: { md: "70%", xs: "100%", sm: "70%" },
            backgroundColor: !!ticketInfo ? (theme.palette[ticketInfo.color] as PaletteColor).main : "",
            borderRadius: "10px",
            border: "2px solid #000000",
            boxShadow: "2px 2px 5px black",
        }}>
            <Grid item xs={5}>
                <CustomDiv>
                    <ImageContainer>
                        <Image src={QrCode.src} width={160} height={160}/>
                    </ImageContainer>
                    <Typography variant="h5" fontSize={{ md: "1.5rem", xs: "0.8rem" }} margin={{ md: "0 5rem", xs: 0 }}>
                        You should show this at the entrance door.
                    </Typography>
                </CustomDiv>
            </Grid>
            <Grid item xs={7}>
                <div>
                    <Typography variant="h3" fontSize={{ xs: "1.5rem", md: "2rem" }} marginTop={{ md: "7rem", xs: "2.5rem" }}>
                        The Gathering
                    </Typography>
                    <Typography variant="h5" fontSize="1.3rem" margin="1rem">
                        {!!updatedTime && `${updatedTime[1]} , ${updatedTime[2]}`}
                    </Typography>
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography variant="h5" fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
                                Type: {typeTicket?.toLowerCase()}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5" fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
                                Seats: {invoiceDetail.data.quantity}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="h3" fontSize={{ xs: "1rem" }} textAlign="right" margin={{ md: "7rem 2rem 1rem 0", xs: "2rem 2rem 1rem 0" }}>
                        no. {invoiceDetail.data.transactionId}
                    </Typography>
                </div>
            </Grid>
        </Grid >
    )
}

export default TicketInvoice;
