import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

async function payment(data) {

  const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
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
  return res.data.requestPayment;
}

export default payment;
