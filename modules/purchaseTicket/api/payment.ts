import type { RequestPayment } from '../../shared/types/RequestPayment';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { getCookie } from '../../shared/components/GetCookie';

async function payment(data: RequestPayment) {

  const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      "x-lang": getCookie("NEXT_LOCALE")?.toUpperCase() ?? "EN"
    }
  })

  const res = await apolloClient.mutate({
    mutation: gql`
      mutation requestPayment($data: RequestPaymentFields){
        requestPayment(data: $data) {
          message
          statusCode
          data {
            paymentLink
          }
      }
    }
    `,
    variables: { data }
  })
  if (res.data.requestPayment.statusCode >= 400)
    throw new Error(res.data.requestPayment.message);
  return res.data.requestPayment;
}

export default payment;
