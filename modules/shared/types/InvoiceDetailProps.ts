
export type InvoiceDetailProps = {
    data: {
        email?: string;
        fullName?: string;
        uuid?: string;
        quantity: number;
        paymentMethod?: string;
        walletAddress?: string
        transactionId: string;
        amountDollar?: string;
        amountRial?: string;
        productId: number;
        product: ProductProps;
        paymentLink?: string;
        status: string;
    }
    statusCode?: number;
    message?: string;
};

export type ProductProps = {
    id?: number;
    title: string;
    uuid?: string;
    parentId: number;
    priceRial?: string;
    priceDollar?: string;
    availableQuantity?: number;
    link?: string;
    isPurchasable?: boolean;
    status?: string;
}