import type { FunctionComponent } from "react";
import { Grid, styled, Typography, Container } from "@mui/material";
import Image from "next/image";
import backImage from "../asset/image/backgroundImage.jpg"
import headerImage from "../asset/image/headerImage.jpg"
import Actors from "./Actors";

const CustomContainer = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    height: "20rem",
    borderRadius: "0 0 20px 20px",
    position: "relative",
    overflow: "hidden"
}));

const ImageDisplay = styled("div")(({ theme }) => ({
    border: "5px solid #ffffff",
    borderRadius: 24,
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
        width: "70%",
        maxHeight: 300,
    },
    width: "100%",
    height: 350
}));

const Header: FunctionComponent = () => {

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <CustomContainer>
                {/* TODO: Change title */}
                <Image src={headerImage} layout="fill" alt="Title of the page" objectFit="cover" />
            </CustomContainer>
            <Container>
                <Grid container spacing={5} justifyContent="space-between" marginTop={-12}>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        lg={3}
                        alignItems="center"
                        justifyContent="flex-start"
                        sx={{ display: "flex", flexDirection: "column" }}
                    >
                        <ImageDisplay>
                            <Image layout="fill" src={backImage} alt="Cover of the page" />
                        </ImageDisplay>
                        <Typography variant="h1" sx={{ marginTop: "1.8rem" }}>Cafe Market</Typography>
                        <Typography variant="h5" sx={{ marginTop: "1rem" }}>Scheduled for:</Typography>
                        <Typography variant="h2">17 jun, 2022, 2:30pm</Typography>
                        {/* <Rating name="read-only" value={4} sx={{ color: "#24282E" }} readOnly /> */}
                        {/* {
                    item ? (
                        <ImageDisplay
                            style={{
                                width: 210,
                                height: 118,
                            }}
                            src=""
                        />
                    ) : (
                        <Skeleton variant="rectangular" width={210} height={118} />
                    )} */}
                    </Grid>
                    <Grid item xs={12} md={8} lg={8} sx={{ my: 10 }} >
                        <Typography variant="h3">About the course</Typography>
                        <Typography variant="h6" sx={{ marginTop: "0.5rem" }}>In the courses held by Cafe Market team which only the managers, owners of businesses and organization investors can participate in, in a friendly and interactive environment, with the aid of a professional team, they’ll get instructed to identify their possible flaws and get helped to come up with effective and executable plans that will result in their beneficial improvement.</Typography>
                        <Typography variant="h3" marginTop="4.2rem">Mentors</Typography>
                        <Actors />
                    </Grid>
                </Grid >
            </Container>
        </div >
    );

};

export default Header;