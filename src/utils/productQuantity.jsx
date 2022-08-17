export default function productQuantity(cart, item) {
    return cart.filter(product => product.id === item.id && Object.entries(product)
        .every((el, index) => el[1].value === Object.entries(item)[index][1].value)).length
}