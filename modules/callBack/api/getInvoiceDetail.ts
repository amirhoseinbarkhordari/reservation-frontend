import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { PropaneSharp } from '@mui/icons-material';
import { getCookie } from '../../shared/components/GetCookie';

async function getInvoiceDetail(uuid: string, local: string) {

  const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      "x-lang": local.toUpperCase()
    }
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
              metadata{
                field
                value
              }
            }
            productParents {
              id
              uuid
              parentId
              displayStyle
              metadata{
                field
                value
              }
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
