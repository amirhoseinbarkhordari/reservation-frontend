import { useRouter } from "next/router";
import Failed from "../../../modules/callBack/components/Failed";
import Success from "../../../modules/callBack/components/Success";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useMediaQuery } from "@mui/material";
import type { Theme } from "@mui/material";
import getInvoiceDetail from "../../../modules/callBack/api/getInvoiceDetail"
import type { InvoiceDetailProps } from "../../../modules/shared/types/InvoiceDetailProps";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { status, inVoiceId } = context.query;
    let invoiceDetail: InvoiceDetailProps;
    // getInvoiceDetail(inVoiceId).then(res => invoiceDetail = res);
    invoiceDetail = {
        data: {
            quantity: 1,
            transactionId: "123524",
            productId: 15,
            product: {
                title: "golden",
                parentId: 1,
            },
            status: "successful"
        }
    };
    return { props: { status, invoiceDetail } }
}

const Payment: NextPage<{ status: string, invoiceDetail: InvoiceDetailProps }> = (props) => {
    return (
        <>
            {
                (props.status == "success") ?
                    <Success invoiceDetail={props.invoiceDetail} />
                    :
                    <Failed />
            }
        </>
    )
}


export default Payment;