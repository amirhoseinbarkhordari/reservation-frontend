import type { FunctionComponent } from "react";
import type { TicketProps } from "../../shared/types/TicketProps";
import { Container, Grid, styled, Typography } from "@mui/material";
import TicketCafeIcon from "../../shared/components/icons/TicketCafeIcon";
import IconsArray from "./IconsArray";

const TicketComponent = styled(Container)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
        alignItems: "flex-start",
        flexDirection: "row",
    },
    justifyContent: "center",
    margin: "3rem 0",
    padding: 0
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
        textAlign: "justify",
    },
}));

const TicketInfo = styled("div")(({ theme }) => ({
    width: "100%",
    margin: "0 5rem",
    [theme.breakpoints.down("sm")]: {
        margin: "3rem 5rem"
    },
}));

const Ticket: FunctionComponent<{ TicketProps: TicketProps }> = (props) => {
    const { TicketColors, TypeTicket, DescriptionTicket, Price, iconList } = props.TicketProps;
    const iconsArray = IconsArray;

    return (
        <TicketComponent maxWidth="md">
            <TicketCafeIcon fontSize={10} color={TicketColors} />
            <TicketInfo >
                <Typography variant="h3" sx={{ fontWeight: 700 }} gutterBottom>{TypeTicket}</Typography>
                <CustomTypography variant="h6" >{DescriptionTicket}</CustomTypography>
            </TicketInfo>
            <div style={{ width: "50%" }}>
                <Typography variant="h5">Price:<span style={{ fontWeight: 800 }}> {Price} IRR</span></Typography>
                <Grid container sx={{ marginTop: "0.8rem" }}>
                    {
                        !!iconsArray && iconsArray.map((item) => {
                            return (
                                <Grid item key={item.slug} md={5}>
                                    <item.icon fontSize={2} color={(iconList.includes(item.slug)) ? "#000000" : "#C5C5C5"} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </TicketComponent >
    )
}
export default Ticket;