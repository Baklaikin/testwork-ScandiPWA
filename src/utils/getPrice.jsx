export default function getPrice(prices, currency) {
    // console.log(prices);
    // console.log(typeof currency);
    const price = prices.find((price) => (price.currency.symbol === currency));
    console.log(price);
    // return `${price.currency.symbol} ${price.amount}` 
}