import type { FunctionComponent } from 'react';
import type { Palette } from "@mui/material";
import { IconProps } from './IconProps';

export type TicketProps = {
    typeTicket: string;
    descriptionTicket: string;
    price: number;
    color: keyof Palette;
    svgIcon: FunctionComponent<IconProps>;
    iconList: string[];
};