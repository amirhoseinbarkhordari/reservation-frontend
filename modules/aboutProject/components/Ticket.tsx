import type { FunctionComponent } from "react";
import type { TicketProps } from "../../shared/types/TicketProps";
import { Container, Grid, styled, Typography } from "@mui/material";
import IconsArray from "./IconsArray";
import {useTranslations} from "use-intl";
import {ProductItemResponseType} from "../../purchaseTicket/types/getMainProductsResponseType";
import {MergedTicketProps} from "../../shared/types/TicketProps";

const TicketComponent = styled(Container)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
    },
    [theme.breakpoints.up("sm")]: {
        alignItems: "flex-start",
        flexDirection: "row",
    },
    justifyContent: "center",
    margin: "3rem 0",
    padding: 0
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
        textAlign: "justify",
    },
}));

const TicketInfo = styled("div")(({ theme }) => ({
    width: "100%",
    margin: "0 5rem",
    [theme.breakpoints.down("sm")]: {
        margin: "3rem 5rem"
    },
}));

const Ticket: FunctionComponent<{ ticket: MergedTicketProps }> = (props) => {
    const { displayStyle, priceRial, iconList } = props.ticket;
    const Icon = props.ticket.svgIcon;
    const _ = useTranslations('about.tickets')
    const lowerCasedDisplayStyle = displayStyle.toLowerCase();

    return (
        <TicketComponent maxWidth="md">
            <Icon fontSize={10} />
            <TicketInfo >
                <Typography variant="h3" sx={{ fontWeight: 700 }} gutterBottom>
                    {_(`${lowerCasedDisplayStyle}.title`)}
                </Typography>
                <CustomTypography variant="h6" >
                    {_(`${lowerCasedDisplayStyle}.desc`)}
                </CustomTypography>
            </TicketInfo>
            <div style={{ width: "50%" }}>
                <Typography variant="h5">{_('priceLabel')}: <span style={{ fontWeight: 800 }}> {priceRial} IRR</span></Typography>
                <Grid container rowSpacing={0} columnSpacing={2} sx={{ marginTop: "0.8rem" }}>
                    {IconsArray.slice(0, 5).map((item) => (<Grid item key={item.slug} xs>
                        <item.icon fontSize={2} color={(iconList.includes(item.slug)) ? "#000000" : "#C5C5C5"} />
                    </Grid>))}
                </Grid>
                <Grid container rowSpacing={0} columnSpacing={2}>
                    {IconsArray.slice(5, 10).map((item) => (<Grid item key={item.slug} xs>
                        <item.icon fontSize={2}
                            color={(iconList.includes(item.slug)) ? "#000000" : "#C5C5C5"} />
                    </Grid>
                    ))}
                </Grid>
            </div>
        </TicketComponent >
    )
}
export default Ticket;