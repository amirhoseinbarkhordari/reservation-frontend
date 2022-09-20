import Failed from "../../../modules/callBack/components/Failed";
import Success from "../../../modules/callBack/components/Success";
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import getInvoiceDetail from "../../../modules/callBack/api/getInvoiceDetail"
import type { InvoiceDetailProps } from "../../../modules/shared/types/InvoiceDetailProps";
import QRCode from "qrcode";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { status, invoiceId } = context.query;
    try {
        const invoiceDetail = await getInvoiceDetail(invoiceId as string);
        const qrCode = await QRCode.toDataURL(JSON.stringify({ uuid: invoiceDetail.data.uuid }))
        return {
            props: {
                status,
                invoiceDetail,
                qrCode,
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

const Payment: NextPage<{ status: string, invoiceDetail: InvoiceDetailProps, qrCode: string }> = (props) => {
    return (
        <>
            {
                (props.status == "success" && props.invoiceDetail.data.status == "SUCCESSFUL") ?
                    <Success invoiceDetail={props.invoiceDetail} qrCode={props.qrCode} />
                    :
                    <Failed />
            }
        </>
    )
}


export default Payment;