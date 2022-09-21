import { FunctionComponent } from "react";
import { Button, Grid, PaletteColor, styled, Typography, useTheme } from "@mui/material";
import { InvoiceDetailProps } from "../../shared/types/InvoiceDetailProps";
import { TicketTypes } from "../../shared/components/TicketTypes";
import Image from "next/image";
import { useTranslations } from "next-intl";
import DownloadIcon from '@mui/icons-material/Download';

const ImageContainer = styled('div')({
    padding: "5% 15%",
    position: "relative",
});

const DownloadButton = styled(Button)(({ theme }) => ({
    fontSize: "1.2rem",
    color: "black",
    margin: "-2rem",
    width: "50%",
    height: "17%",
    border: "3px solid #000000",
    borderRadius: "40px",
    float: "left",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(37px)",
    [theme.breakpoints.down("md")]: {
        margin: "-1rem",
        fontSize: "0.6rem",
    },
    "@media print": {
        display: "none"
    }
}));

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

const TicketInvoice: FunctionComponent<{ invoiceDetail: InvoiceDetailProps, qrCode: string }> = (props) => {
    const invoiceDetail = props.invoiceDetail;
    const _ = useTranslations("success.ticket");
    const typeTicket = invoiceDetail.data.productParents.find((item) => (!!item.displayStyle))?.displayStyle;
    const ticketInfo = TicketTypes.find((item) => (item.typeTicket.toLowerCase() == typeTicket?.toLowerCase()));
    const updatedTime = invoiceDetail.data.updatedAt?.split(/^([\d-]+)\w{1}([\d:]+).*$/);
    const theme = useTheme();

    const handleClicked = () => {
        window.print();
    }

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
                        <Image src={props.qrCode} width={160} height={160} />
                    </ImageContainer>
                    <Typography variant="h5" fontSize={{ md: "1.4rem", xs: "0.8rem", sm: "1rem" }}>
                        {_('barcodeDesc')}
                    </Typography>
                </CustomDiv>
                <DownloadButton onClick={handleClicked}>{_('download')}<DownloadIcon sx={{ fontSize: "15px" }} /></DownloadButton>
            </Grid>
            <Grid item xs={7}>
                <div>
                    <Typography variant="h3" fontSize={{ xs: "1.5rem", md: "2rem" }} marginTop={{ md: "7rem", xs: "2.5rem" }}>
                        {_('title')}
                    </Typography>
                    <Typography variant="h5" fontSize="1.3rem" margin="1rem">
                        {!!updatedTime && `${updatedTime[1]} , ${updatedTime[2]}`}
                    </Typography>
                    <Grid container>
                        <Grid item xs={5}>
                            <Typography variant="h5" fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
                                {_('type')} : {invoiceDetail.data.product.metadata.find(item => item.field == "title")?.value}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5" fontSize={{ md: "1.2rem", xs: "0.8rem" }}>
                                {_('seats')} : {invoiceDetail.data.quantity}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography
                        variant="h3"
                        fontSize={{ xs: "1rem" }}
                        textAlign="right"
                        margin={{ md: "7rem 1rem 1rem 1rem", xs: "2rem 1rem 1rem 1rem" }}
                        noWrap>
                        no.{invoiceDetail.data.uuid}
                    </Typography>
                </div>
            </Grid>
        </Grid >
    )
}

export default TicketInvoice;
