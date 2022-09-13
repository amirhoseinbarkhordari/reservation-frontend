import styled from "@emotion/styled";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import type { PaletteColor } from "@mui/material";
import type { ChangeEvent, Dispatch, FunctionComponent, SetStateAction } from "react";
import type { PaymentProps } from "../../shared/types/PaymentProps";
import { PaymentMethodList } from "./PaymentMethodList";
import LabeledCustomTextField from "../../shared/components/formElements/LabelCustomTextField";
import CustomTextField from "../../shared/components/formElements/CustomTextField";
import type { TicketProps } from "../../shared/types/TicketProps";
import Image from "next/image";

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

const FormPayment: FunctionComponent<{ isMobile: boolean, paymentMethod: PaymentProps, ticketInfo: TicketProps, setPaymentMethod: Dispatch<SetStateAction<PaymentProps>> }> = (props) => {
    const theme = useTheme();
    const paymentMethod = props.paymentMethod;
    const ticketInfo = props.ticketInfo;

    const CustomButton = styled(Button)(() => ({
        backgroundColor: (theme.palette[ticketInfo.color] as PaletteColor).main,
        margin: "3rem 0",
        "&:hover": {
            background: (theme.palette[ticketInfo.color] as PaletteColor).dark
        }
    }));

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item md={8}>
                    <Grid container>
                        {PaymentMethodList.map((item) => {
                            return (
                                <DivWithSeparator item md={6} xs={6} key={item.name}>
                                    <div className="container">
                                        <ImageDisplay style={
                                            (paymentMethod.name == item.name) ?
                                                { borderColor: (theme.palette[ticketInfo.color] as PaletteColor).main }
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
                </Grid >
                {!props.isMobile ?
                    <Grid item md={3}>
                        <LabeledCustomTextField id="Quantity" label="Quantity">
                            <CustomTextField
                                variant="outlined"
                                type="number"
                                name="Quantity"
                                id="Quantity"
                                disabled={paymentMethod.disable}
                                // helperText={errors.description}
                                // error={!!errors.description}
                                fullWidth
                            />
                        </LabeledCustomTextField>
                    </Grid>
                    :
                    <Grid item xs={8}>
                        <Typography variant="h5" sx={{ textAlign: "justify", fontWeight: 400, marginTop: "1.5rem" }}>{paymentMethod.description}</Typography>
                    </Grid>
                }
                <Grid item xs={12}>
                    <LabeledCustomTextField id="FullName" label="Full Name">
                        <CustomTextField
                            variant="outlined"
                            name="FullName"
                            id="FullName"
                            placeholder="e.g. `Amir Ramzali ...`"
                            // helperText={errors.description}
                            // error={!!errors.description}
                            fullWidth
                        />
                    </LabeledCustomTextField>
                    <LabeledCustomTextField id="Email" label="Email">
                        <CustomTextField
                            variant="outlined"
                            name="Email"
                            id="Email"
                            placeholder="e.g. `Example@gmail.com`"
                            // helperText={errors.description}
                            // error={!!errors.description}
                            fullWidth
                        />
                    </LabeledCustomTextField>
                </Grid>

                <Grid container sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    {paymentMethod.disable || (<>
                        <Grid item xs={6}>
                            <LabeledCustomTextField id="TotalPrice" label="Total Price:" >
                                <span style={{ fontSize: "1.5rem", fontWeight: 700 }}>{ticketInfo.price} IRR</span>
                            </LabeledCustomTextField>
                        </Grid>
                        {props.isMobile && (
                            <Grid item xs={4}>
                                <LabeledCustomTextField id="Quantity" label="Quantity">
                                    <CustomTextField
                                        variant="outlined"
                                        type="number"
                                        name="Quantity"
                                        id="Quantity"
                                        disabled={paymentMethod.disable}
                                        // helperText={errors.description}
                                        // error={!!errors.description}
                                        fullWidth
                                    />
                                </LabeledCustomTextField>
                            </Grid>
                        )}
                    </>)}
                    <Grid item xs={12} md={paymentMethod.disable ? 12 : 6}>
                        <CustomButton type="submit">Buy</CustomButton>
                    </Grid>
                </Grid>


            </Grid>
        </form>
    )
}

export default FormPayment;