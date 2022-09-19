
export type InvoiceDetailProps = {
    data: {
        uuid: string;
        quantity: number;
        walletAddress?: string
        transactionId: string;
        productId: number;
        product: ProductProps;
        productParents: ProductProps[];
        updatedAt: string;
    }
    statusCode: number;
    message: string;
};

export type ProductProps = {
    id: number;
    uuid?: string;
    parentId: number;
    displayStyle?: string;
}