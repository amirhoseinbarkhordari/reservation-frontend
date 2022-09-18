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
            email
            fullName
            uuid
            quantity
            paymentMethod
            walletAddress
            transactionId
            amountDollar
            amountRial
            productId
            product{
              id
              title
              uuid
              parentId
              priceRial
              priceDollar
              availableQuantity
              link
              isPurchasable
              status
            }
            paymentLink
            status
          }
          statusCode
          message
        }
      }
    `,
    variables: { uuid }
  });
  if (res.data.InvoiceDetails.statusCode >= 400)
    throw new Error(res.data.InvoiceDetails.message);
  return res.data.invoiceDetails;
}

export default getInvoiceDetail;
