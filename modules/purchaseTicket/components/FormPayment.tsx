import { Button, Grid, Typography, styled, useTheme, TextField } from "@mui/material";
import type { PaletteColor } from "@mui/material";
import type { Dispatch, FunctionComponent, SetStateAction } from "react";
import type { PaymentProps } from "../../shared/types/PaymentProps";
import LabeledCustomTextField from "../../shared/components/formElements/LabelCustomTextField";
import type { TicketProps } from "../../shared/types/TicketProps";
import payment from "../api/payment";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PaymentMethods from "./PaymentMethods";
import {useTranslations} from "use-intl";

const CustomTextField = styled(TextField)(() => ({
    backgroundColor: "#fff",
    borderRadius: 15,
}));

const FormPayment: FunctionComponent<{
    isMobile: boolean,
    paymentMethod: PaymentProps,
    ticketInfo: TicketProps,
    setPaymentMethod: Dispatch<SetStateAction<PaymentProps>>
}> = (props) => {
    const _ = useTranslations('ticketPurchase.form');
    const theme = useTheme();
    const paymentMethod = props.paymentMethod;
    const ticketInfo = props.ticketInfo;
    const CustomButton = styled(Button)(() => ({
        backgroundColor: (theme.palette[ticketInfo.color] as PaletteColor).main,
        margin: "3rem 0",
        "&:hover": {
            background: (theme.palette[ticketInfo.color] as PaletteColor).dark
        },
        fontSize: "1.5rem",
    }));

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            quantity: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required(),
            email: Yup.string().email().required(),
            quantity: Yup.number().min(1, "Greater Than 0")
        }),
        onSubmit: values => {
            const updatableValues = {
                fullName: values.fullName,
                email: values.email,
                quantity: ((paymentMethod.name == "XARB" || !values.quantity) ? 1 : values.quantity),
                paymentMethod: paymentMethod.name,
                productId: 15
            }
            payment(updatableValues).then(res => window.location.href = res.data.paymentLink)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container>
                <Grid item md={8}>
                    <PaymentMethods setPaymentMethod={props.setPaymentMethod} paymentMethod={paymentMethod} ticketInfo={ticketInfo} />
                </Grid >
                {!props.isMobile ?
                    <Grid item md={3}>
                        <LabeledCustomTextField id="quantity" label={_('inputs.quantity.label')}>
                            <CustomTextField variant="outlined" type="number" name="quantity" id="quantity" fullWidth
                                disabled={paymentMethod.disable}
                                sx={paymentMethod.disable ? { backgroundColor: "#F0F0F0" } : {}}
                                value={formik.values.quantity}
                                onBlur={formik.handleBlur} onChange={formik.handleChange}
                                helperText={formik.touched.quantity && formik.errors.quantity}
                                error={Boolean(formik.touched.quantity && formik.errors.quantity)}
                            />
                        </LabeledCustomTextField>
                    </Grid>
                    :
                    <Grid item xs={8}>
                        <Typography variant="h5" sx={{ textAlign: "justify", fontWeight: 400, marginTop: "1.5rem" }}>{paymentMethod.description}</Typography>
                    </Grid>
                }
                <Grid item xs={12}>
                    <LabeledCustomTextField id="fullName" label={_('inputs.fullName.label')}>
                        <CustomTextField variant="outlined" name="fullName" id="fullName" fullWidth
                            placeholder={_('inputs.fullName.placeHolder')}
                            value={formik.values.fullName}
                            onBlur={formik.handleBlur} onChange={formik.handleChange}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                            error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                        />
                    </LabeledCustomTextField>
                    <LabeledCustomTextField id="email" label={_('inputs.email.label')}>
                        <CustomTextField variant="outlined" name="email" id="email" fullWidth
                            placeholder={_('inputs.email.placeHolder')}
                            value={formik.values.email}
                            onBlur={formik.handleBlur} onChange={formik.handleChange}
                            helperText={formik.touched.email && formik.errors.email}
                            error={Boolean(formik.touched.email && formik.errors.email)}
                        />
                    </LabeledCustomTextField>
                </Grid>
                <Grid container sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    {paymentMethod.disable || (<>
                        <Grid item xs={6}>
                            <LabeledCustomTextField id="TotalPrice" label={_('totalPriceLabel')}>
                                <span style={{ fontSize: "1.5rem", fontWeight: 700 }}>{ticketInfo.price} IRR</span>
                            </LabeledCustomTextField>
                        </Grid>
                        {props.isMobile && (
                            <Grid item xs={4}>
                                <LabeledCustomTextField id="quantity" label={_('inputs.quantity.label')}>
                                    <CustomTextField variant="outlined" type="number" name="quantity" id="quantity" fullWidth
                                        value={formik.values.quantity}
                                        onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        helperText={formik.touched.quantity && formik.errors.quantity}
                                        error={Boolean(formik.touched.quantity && formik.errors.quantity)}
                                    />
                                </LabeledCustomTextField>
                            </Grid>
                        )}
                    </>)}
                    <Grid item xs={12} md={paymentMethod.disable ? 12 : 6}>
                        <CustomButton type="submit">{_('buy')}</CustomButton>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default FormPayment;