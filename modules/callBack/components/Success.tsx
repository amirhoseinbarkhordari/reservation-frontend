import { Button, Container, Grid, styled, TextField, Typography } from "@mui/material";
import Link from "next/link";
import type { FunctionComponent } from "react";
import LabeledCustomTextField from "../../shared/components/formElements/LabelCustomTextField";
import TicketInvoice from "./TicketInvoice";

const SuccessContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "4rem 4rem 0 0",
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

const Success: FunctionComponent<{ isMobile: boolean }> = (props) => {
    return (
        <SuccessContainer >
            <Grid container >
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h4" margin="5rem 0">Successful Purchase!</Typography>
                    </Grid>
                </Grid>
                <TicketInvoice isMobile={props.isMobile} />
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h4" fontSize="1.4rem" margin="2rem 0">You can also recieve the NFT of this Ticket</Typography>
                    </Grid>
                </Grid>
                <Grid container gap="1rem">
                    <Grid item xs={9} md={3} textAlign="left">
                        <Grid item>
                            <LabeledCustomTextField id="walletAddress" label="Wallet Address (optional)">
                                <TextField variant="outlined" name="walletAddress" id="walletAddress" fullWidth
                                    sx={{ backgroundColor: "#fff", borderRadius: "1.2rem" }}
                                // value={formik.values.fullName}
                                // onBlur={formik.handleBlur} onChange={formik.handleChange}
                                // helperText={formik.touched.fullName && formik.errors.fullName}
                                // error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                                />
                            </LabeledCustomTextField>
                        </Grid>
                        <Grid item sx={{ textAlign: "center" }}>
                            <Link href="google.com"><a>how to make one?</a></Link>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} md={1}>
                        <CustomButton>Submit</CustomButton>
                    </Grid>
                </Grid>
            </Grid>
        </SuccessContainer>
    )
}

export default Success;
