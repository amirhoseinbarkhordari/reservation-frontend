import { Button, Grid, Typography, styled, useTheme } from "@mui/material";
import type { PaletteColor } from "@mui/material";
import type { ChangeEvent, Dispatch, FunctionComponent, SetStateAction } from "react";
import type { PaymentProps } from "../../shared/types/PaymentProps";
import LabeledCustomTextField from "../../shared/components/formElements/LabelCustomTextField";
import CustomTextField from "../../shared/components/formElements/CustomTextField";
import type { TicketProps } from "../../shared/types/TicketProps";
import payment from "../api/payment";
import formElementsData from "../../shared/components/formElements/formElementsData";
import type { FormArgumentType } from "../../shared/types/formArgumentType";
import PaymentMethods from "./PaymentMethods";

const FormPayment: FunctionComponent<{
    isMobile: boolean,
    paymentMethod: PaymentProps,
    ticketInfo: TicketProps,
    setPaymentMethod: Dispatch<SetStateAction<PaymentProps>>
}> = (props) => {
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
        let formData = formElementsData(event.target) as FormArgumentType;
        if (!formData.quantity)
            formData.quantity = 0;
        formData.paymentMethod = paymentMethod.name;
        formData.productId = 15;
        payment(formData).then(res => window.location.href = res.data.paymentLink)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item md={8}>
                    <PaymentMethods setPaymentMethod={props.setPaymentMethod} paymentMethod={paymentMethod} ticketInfo={ticketInfo} />
                </Grid >
                {!props.isMobile ?
                    <Grid item md={3}>
                        <LabeledCustomTextField id="Quantity" label="Quantity">
                            <CustomTextField
                                variant="outlined"
                                type="number"
                                name="quantity"
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
                            name="fullName"
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
                            name="email"
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
                                        name="quantity"
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