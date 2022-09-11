import { Container, Grid, styled, Typography, useTheme } from "@mui/material";
import type { FunctionComponent } from "react";
import IconsArray from "./IconsArray";
import HardwareWalletIcon from "../../shared/components/icons/HardwareWalletIcon";

const IconListContainer = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: "2rem",
}));

const IconGrid = styled(Grid)(() => ({
    alignItems: "center"
}));

const IconList: FunctionComponent = () => {
    return (
        <Container>
            <IconListContainer container >
                {IconsArray.map((item) => {
                    return (
                        <Grid key={item.slug} item md={5} xs={12} >
                            <IconGrid container>
                                <Grid item xs={2} md={2}><item.icon fontSize={3} color="#1D1D1D" /></Grid>
                                <Grid item xs={8} md={10}><Typography variant="h3" color="textPrimary">{item.description}</Typography></Grid>
                            </IconGrid>
                        </Grid>
                    )
                })}
            </IconListContainer>
        </Container >
    )
}
export default IconList;