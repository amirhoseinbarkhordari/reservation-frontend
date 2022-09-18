import { Container, Grid, styled, Typography } from "@mui/material";
import type { FunctionComponent } from "react";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Link from "next/link";

const FaildContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "4rem",
    marginTop: "5rem",
    textAlign: "center"
}));

const Failed: FunctionComponent = () => {
    return (
        <FaildContainer>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" margin="5rem 0">Failed Purchase!</Typography>
                </Grid>
                <Grid item xs={12}>
                    <CancelRoundedIcon color='error' sx={{ fontSize: "50px" }} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4">Please try again...</Typography>
                </Grid>
                <Grid item xs={12} margin="5rem 0">
                    <Link href="/"><a style={{ fontSize: "1.5rem" }}>Go to Home Page</a></Link>
                </Grid>
            </Grid>
        </FaildContainer>
    )
}

export default Failed;
