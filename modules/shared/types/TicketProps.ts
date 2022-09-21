import type {FunctionComponent} from 'react';
import type {Palette} from "@mui/material";
import type {IconProps} from './IconProps';
import type {DisplayStyles, ProductItemResponseType} from "../../purchaseTicket/types/getMainProductsResponseType";

export type TicketProps = {
    displayStyle: DisplayStyles;
    color: keyof Palette;
    svgIcon: FunctionComponent<IconProps>;
    iconList: string[];
};

export type MergedTicketProps = TicketProps & ProductItemResponseType;