import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

async function updateWalletAddress(uuid: string, walletAddress: string) {

  const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  })

  const res = await apolloClient.mutate({
    mutation: gql`
      mutation updateWalletAddress($uuid: String, $walletAddress: String){
        updateWalletAddress(uuid: $uuid , walletAddress:$walletAddress) {
          data {
            uuid
            quantity
            walletAddress
            updatedAt
          }
          statusCode
          message
      }
    }
    `,
    variables: { uuid, walletAddress }
  })
  return res.data.updateWalletAddress;
}

export default updateWalletAddress;
