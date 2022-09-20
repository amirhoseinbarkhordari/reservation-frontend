import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

async function getInvoiceDetail(uuid: string) {

  const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  })

  const res = await apolloClient.query({
    query: gql`
      query getInvoiceDetail($uuid: String) {
        invoiceDetails(uuid: $uuid) {
          data {
            uuid
            quantity
            walletAddress
            productId
            product {
              id
              uuid
              parentId
              displayStyle
            }
            productParents {
              id
              uuid
              parentId
              displayStyle
            }
            updatedAt
            status
          }
          statusCode
          message
        }
      }
    `,
    variables: { uuid }
  });
  if (res.data.invoiceDetails.statusCode >= 400)
    throw new Error(res.data.invoiceDetails.message);
  return res.data.invoiceDetails;
}

export default getInvoiceDetail;
