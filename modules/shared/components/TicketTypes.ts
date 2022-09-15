import type { TicketProps } from "../types/TicketProps";
import BronzeTicket from "./icons/ticketIcons/BronzeTicket";
import GoldenTicket from "./icons/ticketIcons/GoldenTicket";
import SilverTicket from "./icons/ticketIcons/SilverTicket";

export const TicketTypes: TicketProps[] = [
    {
        id: 1,
        iconList: ["HardwareWalletIcon", "GiftCardIcon", "TelegramChannelIcon", "TelegramGroupIcon", "EducationIcon", "ExamsIcon", "TradingIcon", "ReceiveIcon", "TeamIcon", "CircleChartIcon"],
        typeTicket: "Golden",
        descriptionTicket: "The Golden plan of this course would be held for the duration of 4 months, in 5 hours sessions. It consists of fundamental and educational meeting discussions, analyzing the action market, recognizing methods for suitable entering and exiting points, and also some special sessions to get the report of the parallel markets that would get complete with receiving the essential data, access to the trading rooms and  analytical watch lists of RSC. At the end of the course, if needed, there would be some complementary sessions and some to answer the questions of participants. Besides having access to the analyzing RSC Telegram channel and the interactive group of RSC, there’s a special academy’s gift card with the credit of 15 million Tomans and a hardware wallet gift for the partakers.",
        price: 300000000,
        svgIcon: GoldenTicket,
        color: "golden"
    },
    {
        id: 2,
        iconList: ["ExamsIcon", "GiftCardIcon", "TelegramChannelIcon", "EducationIcon", "TeamIcon", "CircleChartIcon"],
        typeTicket: "Silver",
        descriptionTicket: "The Silver plan of this course would be held for the duration of 3 months, in 5 hours sessions. It consists of fundamental and educational meeting discussions, analyzing the action market, recognizing methods for suitable entering and exiting points, and also some special sessions to get the report of the parallel markets. At the end of the course, if needed, there would be some complementary sessions and some to answer the questions of participants. Besides having access to analyzing RSC Telegram channel, there’s a special academy gift card with the credit of 10 million Tomans for the partakers.",
        price: 200000000,
        svgIcon: SilverTicket,
        color: "silver"
    },
    {
        id: 3,
        iconList: ["ExamsIcon", "GiftCardIcon", "TelegramChannelIcon", "TeamIcon"],
        typeTicket: "Bronze",
        descriptionTicket: "The Bronze plan of this course would be held for the duration of 2.5 months, in 5 hours sessions. It consists of fundamental meeting discussions, analyzing the action market, and recognizing methods for suitable entering and exiting points. At the end of the course, if needed, there would be some complementary sessions and some to answer the questions of participants. Besides having access to analyzing RSC Telegram channel, there’s a special academy gift card with the credit of 5 million Tomans for the partakers.",
        price: 100000000,
        svgIcon: BronzeTicket,
        color: "bronze"
    }
]