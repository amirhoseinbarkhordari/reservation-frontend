import {Button, Grid, Typography, styled, useTheme, TextField, CircularProgress} from "@mui/material";
import type {PaletteColor} from "@mui/material";
import type {Dispatch, FunctionComponent, SetStateAction} from "react";
import type {PaymentProps} from "../../shared/types/PaymentProps";
import LabeledCustomTextField from "../../shared/components/formElements/LabelCustomTextField";
import type {MergedTicketProps} from "../../shared/types/TicketProps";
import payment from "../api/payment";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import PaymentMethods from "./PaymentMethods";
import {useTranslations} from "use-intl";
import type {RequestPayment} from "../../shared/types/RequestPayment";
import priceSeparator from "../../shared/services/priceSeparator";

const CustomTextField = styled(TextField)(() => ({
    backgroundColor: "#fff",
    borderRadius: 15,
}));

const FormPayment: FunctionComponent<{
    isMobile: boolean,
    paymentMethod: PaymentProps,
    ticketInfo: MergedTicketProps,
    setPaymentMethod: Dispatch<SetStateAction<PaymentProps>>
}> = (props) => {
    const _ = useTranslations();
    const theme = useTheme();
    const paymentMethod = props.paymentMethod;
    const ticketInfo = props.ticketInfo;

    const CustomButton = styled(Button)(({ theme }) => ({
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
            quantity: 1
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required(),
            email: Yup.string().email().required(),
            quantity: Yup.number().min(1, "Greater Than 0")
        }),
        onSubmit: (values) => {
            const updatableValues: RequestPayment = {
                fullName: values.fullName,
                email: values.email,
                quantity: !!values.quantity ? values.quantity : 1,
                paymentMethod: paymentMethod.name,
                productId: ticketInfo.id
            }
            payment(updatableValues).then(res => (window.location.href = res.data.paymentLink))
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container>
                <Grid item md={8} xs={12}>
                    <PaymentMethods setPaymentMethod={props.setPaymentMethod} paymentMethod={paymentMethod}
                                    ticketInfo={ticketInfo}/>
                </Grid>
                {!props.isMobile ?
                    <Grid item md={3}>
                        <LabeledCustomTextField id="quantity" label={_('ticketPurchase.form.inputs.quantity.label')}>
                            <CustomTextField variant="outlined" type="number" name="quantity" id="quantity" fullWidth
                                             disabled={paymentMethod.disable}
                                             sx={paymentMethod.disable ? {backgroundColor: "#F0F0F0"} : {}}
                                             value={paymentMethod.disable ? '' : formik.values.quantity}
                                             onBlur={formik.handleBlur} onChange={formik.handleChange}
                                             helperText={formik.touched.quantity && formik.errors.quantity}
                                             error={Boolean(formik.touched.quantity && formik.errors.quantity)}
                            />
                        </LabeledCustomTextField>
                    </Grid>
                    :
                    <Grid item xs={8}>
                        <Typography variant="h5" sx={{textAlign: "center", fontWeight: 400, marginTop: "1.5rem"}}>
                            {_(`ticketPurchase.methods.${paymentMethod.name}.desc`)}
                        </Typography>
                    </Grid>
                }
                <Grid item xs={12}>
                    <LabeledCustomTextField id="fullName" label={_('ticketPurchase.form.inputs.fullName.label')}>
                        <CustomTextField variant="outlined" name="fullName" id="fullName" fullWidth
                                         placeholder={_('ticketPurchase.form.inputs.fullName.placeHolder')}
                                         value={formik.values.fullName}
                                         onBlur={formik.handleBlur} onChange={formik.handleChange}
                                         helperText={formik.touched.fullName && formik.errors.fullName}
                                         error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                        />
                    </LabeledCustomTextField>
                    <LabeledCustomTextField id="email" label={_('ticketPurchase.form.inputs.email.label')}>
                        <CustomTextField variant="outlined" name="email" id="email" fullWidth
                                         placeholder={_('ticketPurchase.form.inputs.email.placeHolder')}
                                         value={formik.values.email}
                                         onBlur={formik.handleBlur} onChange={formik.handleChange}
                                         helperText={formik.touched.email && formik.errors.email}
                                         error={Boolean(formik.touched.email && formik.errors.email)}
                        />
                    </LabeledCustomTextField>
                </Grid>
                <Grid container sx={{alignItems: "center", justifyContent: "space-between"}}>
                    {paymentMethod.disable || (<>
                        <Grid item xs={6}>
                            <LabeledCustomTextField id="TotalPrice" label={_('ticketPurchase.form.totalPriceLabel')}>
                                <span style={{fontSize: "1.5rem", fontWeight: 700}}>
                                    {priceSeparator(ticketInfo.priceRial * (formik.values.quantity && formik.values.quantity > 0 ? formik.values.quantity : 1))}
                                    {" " + _("about.tickets.priceUnits.rial")}
                                </span>
                            </LabeledCustomTextField>
                        </Grid>
                        {props.isMobile && (
                            <Grid item xs={4}>
                                <LabeledCustomTextField id="quantity" label={_('ticketPurchase.form.inputs.quantity.label')}>
                                    <CustomTextField variant="outlined" type="number" name="quantity" id="quantity"
                                                     fullWidth
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
                        <CustomButton type="submit" disabled={formik.isSubmitting}>
                            {formik.isSubmitting ? <CircularProgress size={25} sx={{color: "white"}}/> : _('ticketPurchase.form.buy')}
                        </CustomButton>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default FormPayment;