export enum DisplayStyles {
    "GOLDEN" = "GOLDEN",
    "SILVER" = "SILVER",
    "BRONZE" = "BRONZE"
}

export interface ProductItemResponseType {
    id: number,
    title: string,
    uuid: string,
    priceRial: string,
    priceDollar: string,
    displayStyle: DisplayStyles
}

export interface GetMainProductsResponseType {
    data: ProductItemResponseType[]
}