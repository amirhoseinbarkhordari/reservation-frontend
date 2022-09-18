import { Button, CircularProgress, Container, Grid, InputAdornment, styled, TextField, Typography } from "@mui/material";
import Link from "next/link";
import type { FunctionComponent } from "react";
import LabeledCustomTextField from "../../shared/components/formElements/LabelCustomTextField";
import type { InvoiceDetailProps } from "../../shared/types/InvoiceDetailProps";
import TicketInvoice from "./TicketInvoice";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
}));

const Success: FunctionComponent<{ invoiceDetail: InvoiceDetailProps }> = (props) => {
    const formik = useFormik({
        initialValues: {
            walletAddress: props.invoiceDetail.data.walletAddress ?? '',
        },
        validationSchema: Yup.object({
            walletAddress: Yup.string().required().matches(
                /^0x[a-fA-F0-9]{40}$/,
                "Please enter your Polygon Address wallet!"
            )
        }),
        onSubmit: (values, { setSubmitting }) => {
            const updatableValues = {
                walletAddress: values.walletAddress,
            }
            console.log(updatableValues);
            setSubmitting(false);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <SuccessContainer sx={{ width: { md: "90%", xs: "100%" } }}>
                <Typography variant="h4" margin="5rem 0">Successful Purchase!</Typography>
                <TicketInvoice invoiceDetail={props.invoiceDetail} />
                <Typography variant="h4" fontSize="1.4rem" margin="2rem 0">You can also receive the NFT of this Ticket</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={9} md={3} textAlign="left">
                        <LabeledCustomTextField id="walletAddress" label="Wallet Address (optional)">
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
                            <Link href="https://google.com"><a>how to make one?</a></Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={2} md={1}>
                        {
                            !props.invoiceDetail.data.walletAddress &&
                            <CustomButton type="submit" disabled={!formik.values.walletAddress || formik.isSubmitting}>
                                {formik.isSubmitting ? <CircularProgress sx={{ color: "white" }} size={25} /> : "Submit"}
                            </CustomButton>
                        }
                    </Grid>
                </Grid>
            </SuccessContainer >
        </form >
    )
}

export default Success;
