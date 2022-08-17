export default function filterCart(items, cart){
        return items.forEach((item) => { 
            const filteredProduct = cart
                    .find(product => product.id === item.id && Object.entries(product)
                        .every((el, index) => el[1].value === Object.entries(item)[index][1].value))
            if (!filteredProduct) cart.push(item);
        })
    }