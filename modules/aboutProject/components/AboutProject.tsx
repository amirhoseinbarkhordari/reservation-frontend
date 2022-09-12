import type { TicketProps } from "../../shared/types/TicketProps";
import type { FunctionComponent } from "react";
import { Container, styled, Typography } from "@mui/material";
import Ticket from "./Ticket";
import IconList from "./IconList";
import MobileTicketPlanList from "./MobileTicketPlanList";

const CustomTypography = styled(Typography)(() => ({
    fontWeight: 400,
    color: "#343434",
    width: "90%",
    textAlign: "center",
}));

const AboutProject: FunctionComponent<{ ticketTypes: TicketProps[], isMobile: boolean }> = (props) => {
    const ticketTypes = props.ticketTypes;
    return (
        <Container>
            <Typography variant="h5" sx={{ fontSize: "2.4rem", margin: "1.5rem 0 1.8rem 0" }}>About This Project</Typography>
            <CustomTypography variant="h6">Conforming to the demands, 3 different plans of this course are currently available which each of them comes with different pros of its own for the participants; for instance, the course durations, the fees, the services, and the accesses you’ll receive. In the submitting process, besides the traditional approaches, we intended to use blockchain technology and NFTs to improve the user experience and profit from its possibilities. The needed information for each plan of the course is fully described below.</CustomTypography>
            <IconList />
            {props.isMobile ? (<MobileTicketPlanList tickets={ticketTypes}/>) :
                ticketTypes.map((item) => (<Ticket key={item.id} TicketProps={item} />))}
        </Container>
    )
}
export default AboutProject;