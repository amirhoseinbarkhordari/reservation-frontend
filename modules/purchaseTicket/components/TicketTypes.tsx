import { Grid, Typography } from "@mui/material";
import type { Dispatch, FunctionComponent, SetStateAction } from "react";
import DisableTicket from "../../shared/components/icons/ticketIcons/DisableTicket";
import type {MergedTicketProps} from "../../shared/types/TicketProps";
import {useTranslations} from "use-intl";

const TicketTypes: FunctionComponent<{
    ticketTypes: MergedTicketProps[],
    isMoblie: boolean,
    setTicketInfo: Dispatch<SetStateAction<MergedTicketProps>>,
    ticketInfo: MergedTicketProps
}> = (props) => {
    const _ = useTranslations('about.tickets')
    return (
        <Grid container sx={{ margin: "3rem 0", textAlign: "center" }}>
            {
                props.ticketTypes.map((item) => {
                    const Icon = ((props.ticketInfo.id == item.id) ? item.svgIcon : DisableTicket);
                    return (
                        <Grid item xs key={item.displayStyle.toLowerCase()} style={{ cursor: 'pointer' }} onClick={() => props.setTicketInfo(item)}>
                            <Icon fontSize={8} />
                            {!props.isMoblie &&
                                <Typography variant="h6" sx={{ margin: "1.5rem 0 0 1.5rem" }}>
                                    {_(`${item.displayStyle.toLowerCase()}.title`)}
                                </Typography>
                            }
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}


export default TicketTypes;
