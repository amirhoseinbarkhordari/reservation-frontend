import { Container, Divider, useMediaQuery, useTheme } from '@mui/material';
import type { Theme } from '@mui/material';
import type { NextPage } from 'next'
import AboutProject from '../modules/aboutProject/components/AboutProject'
import Header from '../modules/header/components/Header'
import PurchaseTicket from '../modules/purchaseTicket/components/PurchaseTicket'
import type { TicketProps } from '../modules/shared/types/TicketProps';

const Home: NextPage = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const Tickets: TicketProps[] = [
    { id: 1, TypeTicket: "Golden", DescriptionTicket: "The Golden plan of this course would be held for the duration of 4 months, in 5 hours sessions. It consists of fundamental and educational meeting discussions, analyzing the action market, recognizing methods for suitable entering and exiting points, and also some special sessions to get the report of the parallel markets that would get complete with receiving the essential data, access to the trading rooms and  analytical watch lists of RSC. At the end of the course, if needed, there would be some complementary sessions and some to answer the questions of participants. Besides having access to the analyzing RSC Telegram channel and the interactive group of RSC, there’s a special academy’s gift card with the credit of 15 million Tomans and a hardware wallet gift for the partakers.", TicketColors: theme.palette.golden, Price: 300000000 },
    { id: 2, TypeTicket: "Silver", DescriptionTicket: "The Silver plan of this course would be held for the duration of 3 months, in 5 hours sessions. It consists of fundamental and educational meeting discussions, analyzing the action market, recognizing methods for suitable entering and exiting points, and also some special sessions to get the report of the parallel markets. At the end of the course, if needed, there would be some complementary sessions and some to answer the questions of participants. Besides having access to analyzing RSC Telegram channel, there’s a special academy gift card with the credit of 10 million Tomans for the partakers.", TicketColors: theme.palette.silver, Price: 200000000 },
    { id: 3, TypeTicket: "Bronze", DescriptionTicket: "The Bronze plan of this course would be held for the duration of 2.5 months, in 5 hours sessions. It consists of fundamental meeting discussions, analyzing the action market, and recognizing methods for suitable entering and exiting points. At the end of the course, if needed, there would be some complementary sessions and some to answer the questions of participants. Besides having access to analyzing RSC Telegram channel, there’s a special academy gift card with the credit of 5 million Tomans for the partakers.", TicketColors: theme.palette.bronze, Price: 100000000 }
  ]

  return (
    <>
      <Header />
      <Container sx={{ marginTop: "6rem" }}>
        <Divider sx={{ width: "100%" }} />
        <AboutProject Tickets={Tickets} isMobile={isMobile} />
        <PurchaseTicket Tickets={Tickets} isMobile={isMobile} />
      </Container>

    </>
  )
}

export default Home
