import { FunctionComponent, useState } from "react";
import { Grid, styled, Typography, Container, ToggleButtonGroup, ToggleButton } from "@mui/material";
import Image from "next/image";
import backImage from "../asset/image/backgroundImage.jpg"
import headerImage from "../asset/image/headerImage.jpg"
import Actors from "./Actors";
import { useTranslations } from "use-intl";
import { useRouter } from "next/router";

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
    [theme.breakpoints.down("md")]: {
        width: "40%",
        height: 400,
    },
    [theme.breakpoints.down("sm")]: {
        width: "70%",
        maxHeight: 300,
    },
    width: "100%",
    height: 350
}));

const CustomToggleButton = styled(ToggleButton)(() => ({
    backgroundColor: "rgba(26, 26, 26, 0.8)",
    color: "white",
    position: "relative",
    borderRadius: "30px",
    width: "50px",
    height: "50px",
    fontSize: "13px",
    fontWeight: 700,
    textDecoration: "underline",
    "&:hover": {
        backgroundColor: "rgba(26, 26, 26, 0.8)",
    },
    "&.Mui-selected": {
        backgroundColor: "rgba(26, 26, 26, 0.8)",
        "& > span.container": {
            lineHeight: "30px",
            position: "absolute",
            backgroundColor: "white",
            borderRadius: "50%",
            width: "30px",
            height: "30px"
        }
    }
}));

const Header: FunctionComponent = () => {
    const _ = useTranslations("header");
    const router = useRouter();
    const [toggleButton, setToggleButton] = useState(router.locale);

    const handleToggle = (event: React.MouseEvent<HTMLElement>, newLocale: string) => {
        setToggleButton(newLocale);
        document.cookie = `NEXT_LOCALE=${newLocale}`;
        const { pathname, asPath, query } = router;
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <CustomContainer>
                <Image src={headerImage} layout="fill" alt="Title of the page" objectFit="cover" />
                <ToggleButtonGroup
                    value={toggleButton}
                    exclusive
                    onChange={handleToggle}
                    sx={{ margin: "30px" }}
                >
                    <CustomToggleButton value="en" disabled={toggleButton == "en"}>
                        <span className="container">EN</span>
                    </CustomToggleButton>
                    <CustomToggleButton value="fa" disabled={toggleButton == "fa"}>
                        <span className="container">FA</span>
                    </CustomToggleButton>
                </ToggleButtonGroup>
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
                        <Typography variant="h1" sx={{ marginTop: "1.8rem" }}>{_('cardTitle')}</Typography>
                        <Typography variant="h5" sx={{ marginTop: "1rem" }}>{_('timeLabel')}</Typography>
                        <Typography variant="h2">{_('time')}</Typography>
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
                        <Typography variant="h3">{_('aboutTitle')}</Typography>
                        <Typography variant="h6" sx={{ marginTop: "0.5rem" }}>
                            {_('aboutDesc')}
                        </Typography>
                        <Typography variant="h3" marginTop="4.2rem">{_('mentorsTitle')}</Typography>
                        <Actors />
                    </Grid>
                </Grid >
            </Container>
        </div >
    );

};

export default Header;