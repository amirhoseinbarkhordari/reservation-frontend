import type { FunctionComponent } from "react";
import { Grid, styled, Typography } from "@mui/material";
import IconsArray from "./IconsArray";
import { useTranslations } from "use-intl";
import type {MergedTicketProps} from "../../shared/types/TicketProps";
import priceSeparator from "../../shared/services/priceSeparator";

const FlexedDiv = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
});

const MobileTicketPlanItem: FunctionComponent<{ ticket: MergedTicketProps }> = ({ ticket }) => {
    const Icon = ticket.svgIcon;
    const _ = useTranslations('about.tickets')
    const lowerCasedDisplayStyle = ticket.displayStyle.toLowerCase();
    return (<FlexedDiv>
        <Icon height={12} fontSize={15} />
        <Typography marginTop={3} variant="h3">
            {_(`${lowerCasedDisplayStyle}.title`)}
        </Typography>
        <Typography marginTop={1.5} variant="h5">
            {priceSeparator(ticket.priceRial) + " " + _("priceUnits.rial")}
        </Typography>
        <Typography variant="body1" marginTop={3} textAlign="center">
            {_(`${lowerCasedDisplayStyle}.desc`)}
        </Typography>
        <div>
            <Grid container rowSpacing={0} columnSpacing={2} sx={{ marginTop: "0.8rem" }}>
                {IconsArray.slice(0, 5).map((item) => (<Grid item key={item.slug} xs>
                    <item.icon fontSize={2} color={(ticket.iconList.includes(item.slug)) ? "#000000" : "#C5C5C5"} />
                </Grid>))}
            </Grid>
            <Grid container rowSpacing={0} columnSpacing={2}>
                {IconsArray.slice(5, 10).map((item) => (<Grid item key={item.slug} xs>
                    <item.icon fontSize={2}
                        color={(ticket.iconList.includes(item.slug)) ? "#000000" : "#C5C5C5"} />
                </Grid>
                ))}
            </Grid>
        </div>
    </FlexedDiv>);
}

export default MobileTicketPlanItem;