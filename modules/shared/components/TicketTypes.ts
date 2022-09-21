import type {TicketProps} from "../types/TicketProps";
import BronzeTicket from "./icons/ticketIcons/BronzeTicket";
import GoldenTicket from "./icons/ticketIcons/GoldenTicket";
import SilverTicket from "./icons/ticketIcons/SilverTicket";
import {DisplayStyles} from "../../purchaseTicket/types/getMainProductsResponseType";

export const TicketTypes: TicketProps[] = [
    {
        iconList: ["HardwareWalletIcon", "GiftCardIcon", "TelegramChannelIcon", "TelegramGroupIcon", "EducationIcon", "ExamsIcon", "TradingIcon", "ReceiveIcon", "TeamIcon", "CircleChartIcon"],
        displayStyle: DisplayStyles.GOLDEN,
        svgIcon: GoldenTicket,
        color: "golden"
    },
    {
        iconList: ["ExamsIcon", "GiftCardIcon", "TelegramChannelIcon", "EducationIcon", "TeamIcon", "CircleChartIcon"],
        displayStyle: DisplayStyles.SILVER,
        svgIcon: SilverTicket,
        color: "silver"
    },
    {
        iconList: ["ExamsIcon", "GiftCardIcon", "TelegramChannelIcon", "TeamIcon"],
        displayStyle: DisplayStyles.BRONZE,
        svgIcon: BronzeTicket,
        color: "bronze"
    }
]