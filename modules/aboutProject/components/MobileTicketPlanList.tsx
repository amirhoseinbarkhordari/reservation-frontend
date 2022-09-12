import 'swiper/css';

import type {FunctionComponent} from "react";
import type {TicketProps} from "../../shared/types/TicketProps";
import { Swiper, SwiperSlide } from 'swiper/react';
import MobileTicketPlanItem from "./MobileTicketPlanItem";

const MobileTicketPlanList: FunctionComponent<{ tickets: TicketProps[]}> = ({tickets}) => {
    return (
        <Swiper style={{width: "100%"}} slidesPerView={1.3} centeredSlides spaceBetween={20} loop>
            {tickets.map(ticket => <SwiperSlide><MobileTicketPlanItem ticket={ticket}/></SwiperSlide>)}
        </Swiper>
    )
}

export default MobileTicketPlanList;