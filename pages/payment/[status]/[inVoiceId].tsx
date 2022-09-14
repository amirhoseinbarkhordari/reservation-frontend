import { useRouter } from "next/router";
import Failed from "../../../modules/callBack/components/Failed";
import Success from "../../../modules/callBack/components/Success";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useMediaQuery } from "@mui/material";
import type { Theme } from "@mui/material";
import getInvoiceDetail from "../../../modules/callBack/api/getInvoiceDetail"

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { status, inVoiceId } = context.query;
    getInvoiceDetail(inVoiceId).then(res => console.log(res))
    return { props: { status } }
}

const Payment: NextPage<{ status: string, inVoiceId: number }> = (props) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
    return (
        <>
            {
                (props.status == "success") ?
                    <Success isMobile={isMobile} />
                    :
                    <Failed />
            }
        </>
    )
}


export default Payment;