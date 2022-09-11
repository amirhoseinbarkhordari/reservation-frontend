import type { FunctionComponent } from "react";
import { Container, Grid, styled, Typography } from "@mui/material";
import IconsArray from "./IconsArray";

const IconListContainer = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: "2rem",
}));

const IconList: FunctionComponent = () => {
    return (
        <Container sx={{ margin: "5rem 0" }}>
            <IconListContainer container >
                {IconsArray.map((item) => {
                    return (
                        <Grid key={item.slug} item md={5} xs={12} >
                            <Grid container sx={{ alignItems: "center" }}>
                                <Grid item xs={2} md={2}><item.icon fontSize={3} color="#1D1D1D" /></Grid>
                                <Grid item xs={8} md={10}><Typography variant="h3" color="textPrimary">{item.description}</Typography></Grid>
                            </Grid>
                        </Grid>
                    )
                })}
            </IconListContainer>
        </Container >
    )
}
export default IconList;