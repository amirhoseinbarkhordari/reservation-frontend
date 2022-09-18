import type { FunctionComponent } from "react";
import { Container, Grid, styled, Typography, useTheme } from "@mui/material";
import IconsArray from "./IconsArray";
import {useTranslations} from "use-intl";

const IconListContainer = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: "2rem",
}));

const IconList: FunctionComponent = () => {
    const theme = useTheme();
    const _ = useTranslations('about.box')
    return (
        <Container sx={{ margin: "5rem 0" }}>
            <IconListContainer container >
                {IconsArray.map((item) => {
                    return (
                        <Grid key={item.slug} item md={5} xs={12} >
                            <Grid container sx={{ alignItems: "center" }}>
                                <Grid item xs={2} md={2}>
                                    <item.icon fontSize={3} color={theme.palette.iconList.main} />
                                </Grid>
                                <Grid item xs={8} md={10}>
                                    <Typography variant="h3" color="textPrimary">
                                        {_(item.slug)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })}
            </IconListContainer>
        </Container >
    )
}
export default IconList;