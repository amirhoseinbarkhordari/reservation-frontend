import AppApolloClient from "../../shared/services/AppApolloClient";
import { gql } from "@apollo/client";
import type { Languages } from "../../shared/types/Languages";

const getProducts = async (lang: Languages) => {
  const apolloClient = AppApolloClient.getInstance(lang);
  const res = await apolloClient.query({
    query: gql`
        query getMainProducts {
          getProducts(filters: {parentId: 0, isPurchasable: true}) {
            data {
              id
              uuid
              priceRial
              priceDollar
              displayStyle
              metadata {
                  field
                  value
              }
            }
          }
        }
        `
  });
  return res.data.getProducts;
}

export default getProducts;