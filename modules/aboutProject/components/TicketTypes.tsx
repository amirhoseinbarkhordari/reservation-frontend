import { Container, styled, Typography, useMediaQuery } from "@mui/material";
import type { Theme } from "@mui/material";
import type { FunctionComponent } from "react";
import TicketCafeIcon from "../../shared/components/icons/TicketCafeIcon";
import type { TicketProps } from "../../shared/types/TicketProps";


const TicketComponent = styled(Container)(() => ({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "3rem 0",
    padding: 0
}));

const TicketTypes: FunctionComponent<{ TicketProps: TicketProps, isMobile: boolean }> = (props) => {
    const { TicketColors, TypeTicket, DescriptionTicket, Price } = props.TicketProps;
    return (
        <TicketComponent maxWidth="md">
            <TicketCafeIcon fontSize={props.isMobile ? 6 : 10} color={TicketColors} />
            <div style={{ margin: "0 3rem", width: "100%" }}>
                <Typography variant="h3" sx={{ fontWeight: 700 }} gutterBottom>{TypeTicket}</Typography>
                <Typography variant="h6" textAlign="justify" >{DescriptionTicket}</Typography>
            </div>
            <div style={{ width: "20%" }}>
                <Typography variant="h5" sx={{ fontWeight: 400 }}>Price:<span style={{ fontWeight: 500 }}> {Price}$</span></Typography>
            </div>
        </TicketComponent>
    )
}
export default TicketTypes;