import { Button, CircularProgress, Container, Grid, InputAdornment, styled, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
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

    const [disabledButton, setDisabledButton] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            walletAddress: "",
        },
        validationSchema: Yup.object({
            walletAddress: Yup.string().required().matches(
                /^0x[a-f,A-F,0-9]{40}$/,
                "Please enter your Polygon Address wallet!"
            )
        }),
        onSubmit: values => {
            setDisabledButton(true);
            const updatableValues = {
                walletAddress: values.walletAddress,
            }
            console.log(updatableValues);
            setDisabledButton(false);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <SuccessContainer sx={{ width: { md: "90%", xs: "100%" } }}>
                <Grid container >
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h4" margin="5rem 0">Successful Purchase!</Typography>
                        </Grid>
                    </Grid>
                    <TicketInvoice invoiceDetail={props.invoiceDetail} />
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h4" fontSize="1.4rem" margin="2rem 0">You can also recieve the NFT of this Ticket</Typography>
                        </Grid>
                    </Grid>
                    <Grid container gap="1rem">
                        <Grid item xs={9} md={3} textAlign="left">
                            <Grid item>
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

                            </Grid>
                            <Grid item sx={{ textAlign: "center" }}>
                                <Link href="https://google.com"><a>how to make one?</a></Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} md={1}>
                            <CustomButton type="submit" disabled={!formik.values.walletAddress || disabledButton}>
                                {disabledButton ? <CircularProgress sx={{ color: "white" }} size={25} /> : "Submit"}
                            </CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
            </SuccessContainer >
        </form>
    )
}

export default Success;
