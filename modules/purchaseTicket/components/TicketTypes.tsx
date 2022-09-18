import { Grid, Typography } from "@mui/material";
import type { Dispatch, FunctionComponent, SetStateAction } from "react";
import type { TicketProps } from "../../shared/types/TicketProps";
import {useTranslations} from "use-intl";

const TicketTypes: FunctionComponent<{
    ticketTypes: TicketProps[],
    isMoblie: boolean,
    setTicketInfo: Dispatch<SetStateAction<TicketProps>>
}> = (props) => {
    const _ = useTranslations('about.tickets')
    return (
        <Grid container sx={{ margin: "3rem 0" }}>
            {
                props.ticketTypes.map((item) => {
                    const Icon = item.svgIcon;
                    return (
                        <Grid item xs key={item.typeTicket} style={{ cursor: 'pointer' }} onClick={() => props.setTicketInfo(item)}>
                            <Icon fontSize={8} />
                            {!props.isMoblie &&
                                <Typography variant="h6" sx={{ margin: "1.5rem 0 0 1.5rem" }}>
                                    {_(`${item.typeTicket}.title`)}
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
