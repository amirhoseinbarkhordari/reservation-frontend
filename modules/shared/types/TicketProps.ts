export type TicketProps = {
    id: number;
    TypeTicket: string;
    DescriptionTicket: string;
    TicketColors: TicketColor;
    Price: number;
};

export type TicketColor = {
    light: string,
    main: string,
    dark: string,
};