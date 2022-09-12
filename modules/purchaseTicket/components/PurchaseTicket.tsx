import { Button, Container, Divider, Grid, PaletteColor, styled, Typography, useTheme } from "@mui/material";
import type { ChangeEvent, FunctionComponent } from "react";
import { useState } from "react";
import type { PaymentProps } from "../../shared/types/PaymentProps";
import type { TicketProps } from "../../shared/types/TicketProps";
import { PaymentMethodList } from "./PaymentMethodList";
import Image from "next/image";
import LabeledCustomTextField from "../../shared/components/formElements/LabelCustomTextField";
import CustomTextField from "../../shared/components/formElements/CustomTextField";

const PurchaseContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    borderRadius: "4.2rem 4.2rem 0 0",
    marginTop: "4.8rem"
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
    margin: "-1.8rem 0 4.36rem 0",
    fontSize: "3rem",
    letterSpacing: "0.1rem",
    [theme.breakpoints.down("sm")]: {
        margin: "-1.2rem 0 4.36rem 0",
        fontSize: "2rem",
    },
}));

const ImageDisplay = styled("div")(() => ({
    borderRadius: 24,
    cursor: 'pointer',
    position: "relative",
    overflow: "hidden",
    width: 100,
    height: 100,
    border: "4px solid transparent",
}));

const DivWithSeparator = styled(Grid)({
    "& > div.container": {
        position: "relative",
        margin: "0 10px",
        "&:after": {
            content: "''",
            display: "block",
            position: "absolute",
            margin: "-18px 0px",
            right: "5px",
            top: "50%",
            width: "1px",
            height: "36px",
            backgroundColor: "rgba(0, 0, 0, 0.28)"
        }
    },
    "&:last-child > div.container:after": {
        display: "none"
    }

});

const PurchaseTicket: FunctionComponent<{ ticketTypes: TicketProps[], isMobile: boolean }> = (props) => {
    const ticketTypes = props.ticketTypes;
    const ismobile = props.isMobile;
    const [ticketInfo, setTicketInfo] = useState<TicketProps>(ticketTypes[0]);
    const [paymentMethod, setPaymentMethod] = useState<PaymentProps>(PaymentMethodList[0]);
    const theme = useTheme();

    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: (theme.palette[ticketInfo.color] as PaletteColor).main,
        margin: "6rem 0",
        "&:hover": {
            background: (theme.palette[ticketInfo.color] as PaletteColor).dark
        }
    }));

    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event.target);
    }

    return (
        <PurchaseContainer>
            <CustomTypography variant="h3">Purchase the Ticket</CustomTypography>
            <Grid container sx={{ gap: "10rem" }}>
                {!ismobile ?
                    <Grid item md={5}>
                        <Typography variant="h5" sx={{ fontSize: "1.8rem" }}>Description</Typography>
                        <Typography variant="h5" sx={{ textAlign: "justify", fontWeight: 400, marginTop: "1.5rem" }}>{paymentMethod.description}</Typography>
                    </Grid>
                    :
                    <></>
                }
                <Grid item md={5}>
                    <Typography variant="h5" sx={{ fontSize: "1.8rem" }}>Tickets</Typography>
                    <Grid container sx={{ margin: "3rem 0" }}>
                        {ticketTypes.map((item) => {
                            const Icon = item.svgIcon;
                            return (
                                <Grid item xs key={item.typeTicket} style={{ cursor: 'pointer' }} onClick={() => setTicketInfo(item)}>
                                    <Icon fontSize={8} />
                                    <Typography variant="h6" sx={{ textAlign: "center" }}>{item.typeTicket}</Typography>
                                </Grid>
                            )
                        })
                        }
                    </Grid>
                    <Typography variant="h5" sx={{ fontSize: "1.8rem" }}>Payment Methods</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container>
                            {
                                !ismobile ?
                                    <>
                                        <Grid item md={8}>
                                            <Grid container>
                                                {PaymentMethodList.map((item) => {
                                                    return (
                                                        <DivWithSeparator item md={6} key={item.name}>
                                                            <div className="container">
                                                                <ImageDisplay style={
                                                                    (paymentMethod.name == item.name) ?
                                                                        { borderColor: (theme.palette[ticketInfo.color] as PaletteColor).main }
                                                                        :
                                                                        {}
                                                                }>
                                                                    <Image
                                                                        src={item.image}
                                                                        onClick={() => setPaymentMethod(item)}
                                                                        layout="fill" />
                                                                </ImageDisplay>
                                                            </div>
                                                        </DivWithSeparator>
                                                    )
                                                })
                                                }
                                            </Grid>
                                        </Grid >
                                        <Grid item md={4}>
                                            <LabeledCustomTextField id="Quantity" label="Quantity">
                                                <CustomTextField
                                                    variant="outlined"
                                                    type="number"
                                                    name="Quantity"
                                                    id="Quantity"
                                                    disabled={paymentMethod.disable}
                                                    // helperText={errors.description}
                                                    // error={!!errors.description}
                                                    fullWidth
                                                />
                                            </LabeledCustomTextField>
                                        </Grid>
                                    </> :
                                    <>
                                        <Grid container>
                                            {PaymentMethodList.map((item) => {
                                                return (
                                                    <Grid item xs={4} key={item.name}>
                                                        <ImageDisplay style={
                                                            (paymentMethod.name == item.name) ?
                                                                { borderColor: (theme.palette[ticketInfo.color] as PaletteColor).main }
                                                                :
                                                                {}
                                                        }>
                                                            <Image
                                                                src={item.image}
                                                                onClick={() => setPaymentMethod(item)}
                                                                layout="fill" />
                                                        </ImageDisplay>
                                                    </Grid>
                                                )
                                            })
                                            }
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="h5" sx={{ textAlign: "justify", fontWeight: 400, marginTop: "1.5rem" }}>{paymentMethod.description}</Typography>
                                        </Grid>
                                    </>
                            }
                            <Grid item xs={12}>
                                <LabeledCustomTextField id="FullName" label="Full Name">
                                    <CustomTextField
                                        variant="outlined"
                                        name="FullName"
                                        id="FullName"
                                        placeholder="e.g. `Amir Ramzali ...`"
                                        // helperText={errors.description}
                                        // error={!!errors.description}
                                        fullWidth
                                    />
                                </LabeledCustomTextField>
                                <LabeledCustomTextField id="Email" label="Email">
                                    <CustomTextField
                                        variant="outlined"
                                        name="Email"
                                        id="Email"
                                        placeholder="e.g. `Example@gmail.com`"
                                        // helperText={errors.description}
                                        // error={!!errors.description}
                                        fullWidth
                                    />
                                </LabeledCustomTextField>
                            </Grid>
                            {
                                (paymentMethod.disable) ?
                                    <Grid item xs>
                                        <CustomButton type="submit">Buy</CustomButton>
                                    </Grid>
                                    :
                                    <Grid container sx={{ alignItems: "center", justifyContent: "space-between" }}>
                                        <Grid item xs={5}>
                                            <LabeledCustomTextField id="TotalPrice" label="Total Price:" >
                                                <span style={{ fontSize: "2rem", fontWeight: 700 }}>{ticketInfo.price} IRR</span>
                                            </LabeledCustomTextField>
                                        </Grid>
                                        <Grid xs={5}>
                                            <CustomButton type="submit">Buy</CustomButton>
                                        </Grid>
                                    </Grid>
                            }
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </PurchaseContainer >
    )
}

export default PurchaseTicket;
