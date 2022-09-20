import { Button, CircularProgress, Container, Grid, InputAdornment, OutlinedInput, styled, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import LabeledCustomTextField from "../../shared/components/formElements/LabelCustomTextField";
import type { InvoiceDetailProps } from "../../shared/types/InvoiceDetailProps";
import TicketInvoice from "./TicketInvoice";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import type { Keyable } from "../../shared/types/Keyable";
import updateWalletAddress from "../api/updateWalletAddress";
import { useTranslations } from "use-intl";

const SuccessContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "4rem",
    marginTop: "5rem",
    textAlign: "center"
}));

const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.login.main,
    margin: "4.3rem 0",
    "&:hover": {
        background: theme.palette.login.main,
    },
    fontSize: "1rem",
    "@media print": {
        display: "none"
    }
}));

const Success: FunctionComponent<{ invoiceDetail: InvoiceDetailProps, qrCode: string }> = (props) => {
    const invoiceDetail = props.invoiceDetail;
    const _ = useTranslations("success");
    const [disableButton, setDisableButton] = useState<boolean>(!!invoiceDetail.data.walletAddress);
    const formik = useFormik({
        initialValues: {
            walletAddress: invoiceDetail.data.walletAddress ?? '',
        },
        validationSchema: Yup.object({
            walletAddress: Yup.string().required().matches(
                /^0x[a-fA-F0-9]{40}$/,
                "Please enter your Polygon Address wallet!"
            )
        }),
        onSubmit: (values) => {
            const updatableValues: Keyable = {
                uuid: invoiceDetail.data.uuid,
                walletAddress: values.walletAddress,
            }
            updateWalletAddress(updatableValues.uuid, updatableValues.walletAddress).then(res => {
                if (res.statusCode === 200) {
                    setDisableButton(true)
                }
            });
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <SuccessContainer sx={{ width: { md: "90%", xs: "100%" } }}>
                <Typography variant="h4" margin="5rem 0">{_('title')}</Typography>
                <TicketInvoice invoiceDetail={invoiceDetail} qrCode={props.qrCode} />
                <Typography variant="h4" fontSize="1.4rem" margin="5rem 0 0 0">
                    {_('nftText')}
                </Typography>
                {!disableButton ?
                    <Grid container spacing={1}>
                        <Grid item xs={9} md={3} textAlign="left">
                            <LabeledCustomTextField id="walletAddress" label={_('walletAddressLabel')} fontSize={15}>
                                <TextField name="walletAddress" id="walletAddress" fullWidth
                                    sx={{ backgroundColor: "#fff", borderRadius: "1.2rem" }}
                                    value={formik.values.walletAddress}
                                    onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    helperText={formik.touched.walletAddress && formik.errors.walletAddress}
                                    error={Boolean(formik.touched.walletAddress && formik.errors.walletAddress)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {formik.values.walletAddress && (!formik.errors.walletAddress ?
                                                    <CheckCircleIcon color='success' sx={{ fontSize: "25px" }} /> :
                                                    <CancelRoundedIcon color='error' sx={{ fontSize: "25px" }} />)
                                                }
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </LabeledCustomTextField>
                            <Typography sx={{ textAlign: "center" }}>
                                <Link href="https://google.com"><a>{_('helperText')}</a></Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={2} md={1}>
                            <CustomButton type="submit" disabled={!formik.values.walletAddress || formik.isSubmitting}>
                                {formik.isSubmitting ? <CircularProgress sx={{ color: "white" }} size={25} /> : _('submit')}
                            </CustomButton>
                        </Grid>
                    </Grid>
                    :
                    <Grid container>
                        <Grid xs={3}><LabeledCustomTextField id="walletAddress" label={_('walletAddressLabel')} fontSize={15}>
                            <TextField name="walletAddress" id="walletAddress" fullWidth
                                sx={{ backgroundColor: "#fff", borderRadius: "1.2rem" }}
                                value={formik.values.walletAddress}
                                disabled
                            />
                        </LabeledCustomTextField></Grid>
                    </Grid>
                }
            </SuccessContainer >
        </form >
    )
}

export default Success;
