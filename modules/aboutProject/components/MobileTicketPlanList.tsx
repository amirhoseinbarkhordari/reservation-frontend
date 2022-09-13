import 'swiper/css';

import type { FunctionComponent } from "react";
import type { TicketProps } from "../../shared/types/TicketProps";
import { Swiper, SwiperSlide } from 'swiper/react';
import MobileTicketPlanItem from "./MobileTicketPlanItem";
import { styled } from "@mui/material";

const StyledContainer = styled("div")({
    position: "relative",
    width: "100%",
    "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        left: 0,
        top: 0,
        width: 25,
        height: "100%",
        backgroundImage: "linear-gradient(90deg, #ffffff, transparent)",
        zIndex: 2
    },
    "&::after": {
        content: '""',
        display: "block",
        position: "absolute",
        right: 0,
        top: 0,
        width: 25,
        height: "100%",
        backgroundImage: "linear-gradient(270deg, #ffffff, transparent)",
        zIndex: 2
    }
});

const MobileTicketPlanList: FunctionComponent<{ tickets: TicketProps[] }> = ({ tickets }) => {
    return (<StyledContainer>
        <Swiper style={{ width: "100%" }} slidesPerView={1.3} centeredSlides spaceBetween={20} loop>
            {tickets.map(ticket => <SwiperSlide key={ticket.typeTicket}><MobileTicketPlanItem ticket={ticket} /></SwiperSlide>)}
        </Swiper>
    </StyledContainer>)
}

export default MobileTicketPlanList;