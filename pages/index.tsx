import type { Theme } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import { Container, Divider, useMediaQuery } from '@mui/material';
import AboutProject from '../modules/aboutProject/components/AboutProject';
import Header from '../modules/header/components/Header';
import PurchaseTicket from '../modules/purchaseTicket/components/PurchaseTicket';
import { TicketTypes } from '../modules/shared/components/TicketTypes';
import TutorialVideo from "../modules/Tutorial/components/TutorialVideo";
import getProducts from "../modules/purchaseTicket/api/getProducts";
import {
    GetMainProductsResponseType,
    ProductItemResponseType
} from "../modules/purchaseTicket/types/getMainProductsResponseType";
import type {Keyable} from "../modules/shared/types/Keyable";
import type {TicketProps} from "../modules/shared/types/TicketProps";
import type {Languages} from "../modules/shared/types/Languages";

const Home: NextPage<{products: GetMainProductsResponseType, messages: Keyable}> = (props) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
    const finalTicketTypes: Array<ProductItemResponseType & TicketProps> = [];
    for(const item of TicketTypes) {
        const foundProduct: ProductItemResponseType | undefined = props.products.data.find(product => product.displayStyle === item.displayStyle);
        if(!foundProduct) continue;
        finalTicketTypes.push({...foundProduct, ...item});
    }
    return (
        <>
            <Header />
            <Container>
                <Divider sx={{ width: "100%" }} />
                <AboutProject ticketTypes={finalTicketTypes} isMobile={isMobile} />
                <Divider sx={{ width: "100%" }} />
                <TutorialVideo />
                <PurchaseTicket ticketTypes={finalTicketTypes} isMobile={isMobile} />
            </Container>
        </>
    )
}

export const getServerSideProps: GetStaticProps = async ({ locale }) => {
    const products = await getProducts(!!locale ? locale as Languages : "EN");
    const messages = (await import(`../modules/l10n/lang/${locale}.json`)).default;
    return {
        props: {products, messages}
    };
}

export default Home
