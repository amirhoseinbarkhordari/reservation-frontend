import { Container, Divider, Grid, styled } from "@mui/material";
import type { Dispatch, FunctionComponent, SetStateAction } from "react";
import { useState } from "react";
import Image from "next/image";
import Xarb from "../assets/images/Xarb.jpg";
import Shaparak from "../assets/images/Shaparak.jpg";
import type { TicketProps } from "../../shared/types/TicketProps";

const ImageDisplay = styled("div")(() => ({
    borderRadius: 24,
    cursor: 'pointer',
    position: "relative",
    overflow: "hidden",
    width: 100,
    height: 100,
}));

const PaymentMethod: FunctionComponent<{ paymentMethod: string, ticketInfo: TicketProps, setPaymentMethod: Dispatch<SetStateAction<string>> }> = (props) => {
    return (
        <div style={{ marginTop: "3.57rem", display: "flex" }}>
            <ImageDisplay style={(props.paymentMethod == "Xarb") ? { border: `4px solid ${props.ticketInfo.TicketColors.light}` } : {}}>
                <Image src={Xarb} onClick={() => props.setPaymentMethod("Xarb")} layout="fill" />
            </ImageDisplay>
            <Divider sx={{ backgroundColor: "rgba(0, 0, 0, 0.28)", margin: "0 2rem" }} orientation="vertical" variant="middle" flexItem />
            <ImageDisplay style={(props.paymentMethod == "Shaparak") ? { border: `4px solid ${props.ticketInfo.TicketColors.light}` } : {}}>
                <Image src={Shaparak} onClick={() => props.setPaymentMethod("Shaparak")} layout="fill" />
            </ImageDisplay>
        </div>
    )
}
export default PaymentMethod;