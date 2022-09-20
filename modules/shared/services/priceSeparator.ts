const priceSeparator = (price: string | number) => {
    if(typeof price === "number") price = price.toString();
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default priceSeparator