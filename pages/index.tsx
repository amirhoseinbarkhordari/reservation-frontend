import type { Theme } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import { Container, Divider, useMediaQuery } from '@mui/material';
import AboutProject from '../modules/aboutProject/components/AboutProject';
import Header from '../modules/header/components/Header';
import PurchaseTicket from '../modules/purchaseTicket/components/PurchaseTicket';
import { TicketTypes } from '../modules/shared/components/TicketTypes';
import TutorialVideo from "../modules/Tutorial/components/TutorialVideo";
import getProducts from "../modules/purchaseTicket/api/getProducts";
import {GetMainProductsResponseType} from "../modules/purchaseTicket/types/getMainProductsResponseType";

const Home: NextPage<{products: GetMainProductsResponseType}> = (props) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
    return (
        <>
            <Header />
            <Container>
                <Divider sx={{ width: "100%" }} />
                <AboutProject ticketTypes={TicketTypes} isMobile={isMobile} />
                <Divider sx={{ width: "100%" }} />
                <TutorialVideo />
                <PurchaseTicket ticketTypes={TicketTypes} products={props.products} isMobile={isMobile} />
            </Container>
        </>
    )
}

export const getServersideProps: GetStaticProps = async ({ locale }) => {
    const products = await getProducts();
    const messages = (await import(`../modules/l10n/lang/${locale}.json`)).default;
    return {
        props: {products, messages}
    };
}

export default Home
