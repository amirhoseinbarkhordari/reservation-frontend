import type { FunctionComponent } from "react";
import { Box, Grid, styled, Typography } from "@mui/material";

const CustomGrid = styled(Grid)(({ theme }) => ({
    borderRadius: "10px",
    backgroundColor: "#C6966A",
    border: "1px solid #000000",
    borderRight: "3px solid #000000",
}));

const TicketInvoice: FunctionComponent<{ isMobile: boolean }> = (props) => {
    return (
        <Grid container >
            <CustomGrid item xs={5} md={3} >
                <Grid item xs={12}>
                    Barcode
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" fontSize={{ md: "1.1rem", xs: "0.8rem" }} margin={{ md: "0 5rem", xs: 0 }}>
                        You should show this at the entrance door.
                    </Typography>
                </Grid>
            </CustomGrid>
            <CustomGrid item xs={7} md={5}>
                <Grid container>
                    <Grid item>
                        <Typography variant="h3" fontSize={{ xs: "1.5rem", md: "2rem" }} marginTop={{ md: "7rem", xs: "2.5rem" }}>
                            The Gathering
                        </Typography>
                        <Typography variant="h5" fontSize="1.3rem" margin="1rem">
                            17th Dec, 3:00
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography variant="h5" fontSize={{ xs: "1rem" }}>
                            Type: Gold
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" fontSize={{ xs: "1rem" }}>
                            Seats: 9
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} textAlign="right">
                        <Typography variant="h3" fontSize={{ xs: "1rem" }} margin={{ md: "7rem 2rem 1rem 0", xs: "2rem 2rem 1rem 0" }}>
                            no. 5796314
                        </Typography>
                    </Grid>
                </Grid>
            </CustomGrid>
        </Grid >
    )
}

export default TicketInvoice;
