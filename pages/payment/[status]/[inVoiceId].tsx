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
    const invoiceDetail = await getInvoiceDetail(inVoiceId);
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