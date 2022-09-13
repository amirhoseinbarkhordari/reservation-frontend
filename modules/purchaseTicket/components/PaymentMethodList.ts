import type { PaymentProps } from './../../shared/types/PaymentProps';
import Xarb from "../assets/images/Xarb.jpg";
import Shaparak from "../assets/images/Shaparak.jpg";


export const PaymentMethodList: PaymentProps[] = [
    {
        name: "XARB",
        description: "By purchasing directly from Xarb NFT marketplace, not only you would get a 10% off on the course, but this way, you’ll complete your registration by collecting the NFT on it. Owning the NFT of each course comes with its own specific utilities and pros for the owner. If you already have a wallet and owe the desired amount of MATRIC cryptocurrency, this choice is the most ideal for you.",
        disable: true,
        image: Xarb.src,
    },
    {
        name: "ZARINPAL",
        description: "If you choose Shaparak as your payment method for the course,you can complete the enrollment procedure using Rial currency.Although you wouldn’t buy the NFT of the course this way,you can make a wallet and enter your public address after the compilation,and the NFT gets transferred to you.This method is suitable for the ones who don’tcurrently have a wallet address and MATIC for their NFT purchase on Xarb.",
        disable: false,
        image: Shaparak.src,
    }
]