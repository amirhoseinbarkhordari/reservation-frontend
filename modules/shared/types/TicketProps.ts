import type { Palette, PaletteColor } from "@mui/material";

export type TicketProps = {
    id: number;
    typeTicket: string;
    descriptionTicket: string;
    price: number;
    color: keyof Palette;
    iconList: string[];
};