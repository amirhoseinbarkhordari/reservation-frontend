export type RequestPayment = {
    fullName: string
    email: string,
    quantity: number,
    paymentMethod: string,
    productId: number
}