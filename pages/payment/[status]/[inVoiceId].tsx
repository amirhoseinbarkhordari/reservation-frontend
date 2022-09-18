import Failed from "../../../modules/callBack/components/Failed";
import Success from "../../../modules/callBack/components/Success";
import type { GetServerSideProps, NextPage } from 'next';
import getInvoiceDetail from "../../../modules/callBack/api/getInvoiceDetail"
import type { InvoiceDetailProps } from "../../../modules/shared/types/InvoiceDetailProps";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { status, invoiceId } = context.query;
    try {
        const invoiceDetail = await getInvoiceDetail(invoiceId as string);
        return { props: { status, invoiceDetail } }
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