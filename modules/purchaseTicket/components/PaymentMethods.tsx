import { Grid, PaletteColor, styled, useTheme } from "@mui/material";
import type { Dispatch, FunctionComponent, SetStateAction } from "react";
import type { PaymentProps } from "../../shared/types/PaymentProps";
import { PaymentMethodList } from "./PaymentMethodList";
import Image from "next/image";
import type { TicketProps } from "../../shared/types/TicketProps";

const ImageDisplay = styled("div")(() => ({
    borderRadius: 24,
    cursor: 'pointer',
    position: "relative",
    overflow: "hidden",
    width: 100,
    height: 100,
    border: "4px solid transparent",
}));

const DivWithSeparator = styled(Grid)({
    "& > div.container": {
        position: "relative",
        margin: "0 10px",
        "&:after": {
            content: "''",
            display: "block",
            position: "absolute",
            margin: "-18px 0px",
            right: "5px",
            top: "50%",
            width: "1px",
            height: "36px",
            backgroundColor: "rgba(0, 0, 0, 0.28)"
        }
    },
    "&:last-child > div.container:after": {
        display: "none"
    }
});

const PaymentMethods: FunctionComponent<{
    paymentMethod: PaymentProps,
    setPaymentMethod: Dispatch<SetStateAction<PaymentProps>>,
    ticketInfo: TicketProps
}> = (props) => {
    const theme = useTheme();
    return (
        <Grid container>
            {PaymentMethodList.map((item) => {
                return (
                    <DivWithSeparator item md={6} xs={6} key={item.name}>
                        <div className="container">
                            <ImageDisplay style={
                                (props.paymentMethod.name == item.name) ?
                                    { borderColor: (theme.palette[props.ticketInfo.color] as PaletteColor).main }
                                    :
                                    {}
                            }>
                                <Image
                                    src={item.image}
                                    onClick={() => props.setPaymentMethod(item)}
                                    layout="fill" />
                            </ImageDisplay>
                        </div>
                    </DivWithSeparator>
                )
            })
            }
        </Grid>
    )
}

export default PaymentMethods;