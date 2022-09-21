import { ApolloClient, InMemoryCache } from '@apollo/client';
import type {Languages} from "../types/Languages";

class AppApolloClient {
  private static getData(lang: Languages) {
    const data = {
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      cache: new InMemoryCache(),
      headers: {
        "x-lang": lang
      }
    }
    return data;
  }

  public static getInstance(lang: Languages) {
    return new ApolloClient(AppApolloClient.getData(lang))
  }
}

export default AppApolloClient;
