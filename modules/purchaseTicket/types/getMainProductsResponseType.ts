import {Languages} from "../../shared/types/Languages";

export enum DisplayStyles {
    "GOLDEN" = "GOLDEN",
    "SILVER" = "SILVER",
    "BRONZE" = "BRONZE"
}

export interface ProductItemResponseType {
    id: number,
    uuid: string,
    priceRial: string,
    priceDollar: string,
    displayStyle: DisplayStyles,
    metadata: Array<{
        field: string,
        value: string,
        id: number,
        language: Languages
    }>
}

export interface GetMainProductsResponseType {
    data: ProductItemResponseType[]
}