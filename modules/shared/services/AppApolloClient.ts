import { ApolloClient, InMemoryCache } from '@apollo/client';

class AppApolloClient {
  private static getData() {
    const data = {
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      cache: new InMemoryCache(),
    }
    return data;
  }

  public static getInstance() {
    return new ApolloClient(AppApolloClient.getData())
  }
}

export default AppApolloClient;
