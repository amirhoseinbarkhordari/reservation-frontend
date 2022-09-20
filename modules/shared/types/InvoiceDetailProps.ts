
export type InvoiceDetailProps = {
    data: {
        uuid: string;
        quantity: number;
        walletAddress?: string
        productId: number;
        product: ProductProps;
        productParents: ProductProps[];
        updatedAt: string;
        status: string;
    }
    statusCode: number;
    message: string;
};

export type ProductProps = {
    id: number;
    uuid: string;
    parentId: number;
    displayStyle?: string;
    metadata: Metadata[];
}

export type Metadata = {
    field: string;
    value: string;
}