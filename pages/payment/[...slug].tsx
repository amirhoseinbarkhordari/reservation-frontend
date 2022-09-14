import { useRouter } from "next/router";
import Failed from "../../modules/callBack/components/Failed";
import Success from "../../modules/callBack/components/Success";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useMediaQuery } from "@mui/material";
import type { Theme } from "@mui/material";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = context.params;
    console.log(data);
    return { props: { data } }
}

const Payment: NextPage<{ data: InferGetServerSidePropsType<typeof getServerSideProps> }> = (props) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
    return (
        <>
            {
                (props.data.slug[0] == "success") ?
                    <Success isMobile={isMobile} />
                    :
                    <Failed />
            }
        </>
    )
}


export default Payment;