import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { getCookie } from '../../shared/components/GetCookie';

async function updateWalletAddress(uuid: string, walletAddress: string, local: string) {

  const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      "x-lang": local.toUpperCase()
    }
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
  if (res.data.updateWalletAddress.statusCode >= 400)
    throw new Error(res.data.updateWalletAddress.message)
  return res.data.updateWalletAddress;
}

export default updateWalletAddress;
