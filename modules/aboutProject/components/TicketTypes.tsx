import { Container, styled, Typography } from "@mui/material";
import type { FunctionComponent } from "react";
import TicketCafeIcon from "../../shared/components/icons/TicketCafeIcon";
import type { TicketProps } from "../../shared/types/TicketProps";

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


const TicketTypes: FunctionComponent<{ TicketProps: TicketProps }> = (props) => {
    const { TicketColors, TypeTicket, DescriptionTicket, Price } = props.TicketProps;
    return (
        <TicketComponent maxWidth="md">
            <TicketCafeIcon fontSize={10} color={TicketColors} />
            <TicketInfo style={{}}>
                <Typography variant="h3" sx={{ fontWeight: 700 }} gutterBottom>{TypeTicket}</Typography>
                <CustomTypography variant="h6" >{DescriptionTicket}</CustomTypography>
            </TicketInfo>
            <div style={{ width: "50%" }}>
                <Typography variant="h5">Price:<span style={{ fontWeight: 800 }}> {Price} IRR</span></Typography>
            </div>
        </TicketComponent>
    )
}
export default TicketTypes;