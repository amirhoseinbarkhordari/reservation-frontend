import type {Theme} from '@mui/material';
import type {NextPage} from 'next';
import {Container, Divider, useMediaQuery} from '@mui/material';
import AboutProject from '../modules/aboutProject/components/AboutProject';
import Header from '../modules/header/components/Header';
import PurchaseTicket from '../modules/purchaseTicket/components/PurchaseTicket';
import {TicketTypes} from '../modules/shared/components/TicketTypes';
import TutorialVideo from "../modules/Tutorial/components/TutorialVideo";

const Home: NextPage = () => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
    return (
        <>
            <Header/>
            <Container>
                <Divider sx={{width: "100%"}}/>
                <AboutProject ticketTypes={TicketTypes} isMobile={isMobile}/>
                <Divider sx={{width: "100%"}}/>
                <TutorialVideo/>
                <PurchaseTicket ticketTypes={TicketTypes} isMobile={isMobile}/>
            </Container>
        </>
    )
}

export default Home
