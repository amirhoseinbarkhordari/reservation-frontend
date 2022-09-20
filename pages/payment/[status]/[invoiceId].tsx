import Failed from "../../../modules/callBack/components/Failed";
import Success from "../../../modules/callBack/components/Success";
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import getInvoiceDetail from "../../../modules/callBack/api/getInvoiceDetail"
import type { InvoiceDetailProps } from "../../../modules/shared/types/InvoiceDetailProps";
import QRCode from "qrcode";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { status, invoiceId } = context.query;
    const local = context.locale ?? context.defaultLocale;
    try {
        const invoiceDetail = await getInvoiceDetail(invoiceId as string, local as string);
        const qrCode = await QRCode.toDataURL(JSON.stringify({ uuid: invoiceDetail.data.uuid }))
        return {
            props: {
                status,
                invoiceDetail,
                qrCode,
                local,
                messages: (await import(`../../../modules/l10n/lang/${context.locale}.json`)).default,
            }
        }
    }
    catch (err) {
        return {
            redirect: {
                permanent: false,
                destination: '/',
            }
        }
    }
}

const Payment: NextPage<{ status: string, invoiceDetail: InvoiceDetailProps, qrCode: string, local: string }> = (props) => {
    return (
        <>
            {
                (props.status == "success" && props.invoiceDetail.data.status == "SUCCESSFUL") ?
                    <Success invoiceDetail={props.invoiceDetail} qrCode={props.qrCode} local={props.local} />
                    :
                    <Failed />
            }
        </>
    )
}


export default Payment;