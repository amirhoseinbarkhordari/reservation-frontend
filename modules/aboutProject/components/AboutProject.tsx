import type { TicketProps } from "../../shared/types/TicketProps";
import type { FunctionComponent } from "react";
import { Container, styled, Typography } from "@mui/material";
import Ticket from "./Ticket";
import IconList from "./IconList";
import MobileTicketPlanList from "./MobileTicketPlanList";
import {useTranslations} from "use-intl";

const CustomTypography = styled(Typography)(() => ({
    fontWeight: 400,
    color: "#343434",
    width: "90%",
    textAlign: "center",
}));

const AboutProject: FunctionComponent<{ ticketTypes: TicketProps[], isMobile: boolean }> = (props) => {
    const ticketTypes = props.ticketTypes;
    const _ = useTranslations("about")
    return (
        <Container>
            <Typography variant="h5" sx={{ fontSize: "2.4rem", margin: "1.5rem 0 1.8rem 0" }}>
                {_('aboutProjectTitle')}
            </Typography>
            <CustomTypography variant="h6">
                {_('aboutProjectDesc')}
            </CustomTypography>
            <IconList />
            {props.isMobile ? (<MobileTicketPlanList tickets={ticketTypes}/>) :
                ticketTypes.map((item) => (<Ticket key={item.id} ticket={item} />))}
        </Container>
    )
}
export default AboutProject;