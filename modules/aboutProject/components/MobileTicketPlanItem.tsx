import {FunctionComponent} from "react";
import BronzTicket from "../../shared/components/icons/BronzTicket";
import {Grid, styled, Typography} from "@mui/material";
import {TicketProps} from "../../shared/types/TicketProps";
import IconsArray from "./IconsArray";

const FlexedDiv = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
});

const MobileTicketPlanItem: FunctionComponent<{ ticket: TicketProps }> = ({ticket}) => {
    return (<FlexedDiv>
        <BronzTicket height={12} fontSize={15}/>
        <Typography marginTop={3} variant="h3">
            {ticket.typeTicket}
        </Typography>
        <Typography marginTop={1.5} variant="h5">
            {ticket.price}
        </Typography>
        <Typography variant="body" marginTop={3} textAlign="center">
            {ticket.descriptionTicket}
        </Typography>
        <div>
            <Grid container rowSpacing={0} columnSpacing={2} sx={{marginTop: "0.8rem"}}>
                {IconsArray.slice(0, 5).map((item) => (<Grid item key={item.slug} xs>
                    <item.icon fontSize={2} color={(ticket.iconList.includes(item.slug)) ? "#000000" : "#C5C5C5"}/>
                </Grid>))}
            </Grid>
            <Grid container rowSpacing={0} columnSpacing={2}>
                {IconsArray.slice(5, 10).map((item) => (<Grid item key={item.slug} xs>
                        <item.icon fontSize={2}
                                   color={(ticket.iconList.includes(item.slug)) ? "#000000" : "#C5C5C5"}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    </FlexedDiv>);
}

export default MobileTicketPlanItem;