import type { FunctionComponent } from "react";
import { Box, Grid, PaletteColor, styled, Typography } from "@mui/material";
import { InvoiceDetailProps } from "../../shared/types/InvoiceDetailProps";
import { TicketTypes } from "../../shared/components/TicketTypes";

const TicketInvoice: FunctionComponent<{ invoiceDetail: InvoiceDetailProps }> = (props) => {
    const invoiceDetail = props.invoiceDetail;
    const ticketInfo = TicketTypes.find((item) => (item.id == invoiceDetail.data.product.parentId))

    const CustomGrid = styled(Grid)(({ theme }) => ({
        borderRadius: "10px",
        backgroundColor: !!ticketInfo ? (theme.palette[ticketInfo.color] as PaletteColor).main : "",
        border: "2px solid #000000",
    }));

    const CustomBox = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "50%",
        [theme.breakpoints.down("md")]: {
            width: "30px",
            height: "30px"
        },
        width: "50px",
        height: "50px"
    }));


    return (
        <Grid container sx={{ width: { md: "70%", xs: "100%", sm: "70%" } }}>
            <CustomGrid item xs={5} md={5} sx={{ borderRight: "4px solid #000000", boxShadow: "2px 2px 5px black" }}>
                <Grid item xs={12}>
                    Barcode
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" fontSize={{ md: "1.5rem", xs: "0.8rem" }} margin={{ md: "0 5rem", xs: 0 }}>
                        You should show this at the entrance door.
                    </Typography>
                </Grid>
            </CustomGrid>
            <Box
                sx={{
                    margin: { md: "-25px 135px 0 0", xs: "-14px 63px 0 0", sm: "-13px 90px 0 0" },
                    display: 'grid',
                    gridAutoRows: { md: "2px", xs: "3px", sm: "2px" },
                    gap: { md: 9, xs: 5, sm: 5 },
                    position: "absolute",
                }}
            >
                <CustomBox sx={{ gridRow: '1/5', borderBottom: "2px solid #000" }} />
                <CustomBox sx={{ gridRow: '5/5', borderTop: "2px solid #000" }} />
            </Box>
            <CustomGrid item xs={7} md={7} sx={{ boxShadow: "2px 2px 5px black" }}>
                <Grid container>
                    <Grid item>
                        <Typography variant="h3" fontSize={{ xs: "1.5rem", md: "2rem" }} marginTop={{ md: "7rem", xs: "2.5rem" }}>
                            The Gathering
                        </Typography>
                        <Typography variant="h5" fontSize="1.3rem" margin="1rem">
                            17th Dec, 3:00
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography variant="h5" fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
                            Type: {invoiceDetail.data.product.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
                            Seats: {invoiceDetail.data.quantity}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} textAlign="right">
                        <Typography variant="h3" fontSize={{ xs: "1rem" }} margin={{ md: "7rem 2rem 1rem 0", xs: "2rem 2rem 1rem 0" }}>
                            no. {invoiceDetail.data.transactionId}
                        </Typography>
                    </Grid>
                </Grid>
            </CustomGrid>
        </Grid >
    )
}

export default TicketInvoice;
