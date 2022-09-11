import { Container, styled, Typography, useTheme } from "@mui/material";
import type { FunctionComponent } from "react";
import TicketTypes from "./TicketTypes";
import { TicketProps } from "../../shared/types/TicketProps";

const CustomTypography = styled(Typography)(() => ({
    fontWeight: 400,
    color: "#343434",
    width: "90%",
    textAlign: "center",
    margin: "1.8rem 0 3rem 0"
}));

const AboutProject: FunctionComponent<{ Tickets: TicketProps[], isMobile: boolean }> = (props) => {
    const Tickets = props.Tickets;
    return (
        <Container>
            <Typography variant="h5" sx={{ fontSize: "2.4rem", marginTop: "1.5rem" }}>About This Project</Typography>
            <CustomTypography variant="h6">Conforming to the demands, 3 different plans of this course are currently available which each of them comes with different pros of its own for the participants; for instance, the course durations, the fees, the services, and the accesses you’ll receive. In the submitting process, besides the traditional approaches, we intended to use blockchain technology and NFTs to improve the user experience and profit from its possibilities. The needed information for each plan of the course is fully described below.</CustomTypography>
            {
                !!Tickets && Tickets.map((item) => {
                    return (
                        <TicketTypes key={item.id} TicketProps={item} isMobile={props.isMobile} />
                    )
                })
            }
        </Container>
    )
}
export default AboutProject;