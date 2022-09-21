import AppApolloClient from "../../shared/services/AppApolloClient";
import {gql} from "@apollo/client";

const getProducts = async () => {
    const apolloClient = AppApolloClient.getInstance();
    const res = await apolloClient.query({
        query: gql`
        query getMainProducts {
          getProducts(filters: {parentId: 0, isPurchasable: true}) {
            data {
              id
              title
              uuid
              priceRial
              priceDollar
              displayStyle
            }
          }
        }
        `
    });
    return res.data.getProducts;
}

export default getProducts;