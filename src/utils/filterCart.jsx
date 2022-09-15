 export default function filterCart(items, cart){
    return items.forEach((item) => { 
        const filteredProduct = cart
            .filter(product => product.id === item.id)
            .filter(prod => Object.keys(prod).length === Object.keys(item).length)
            .find(elem => Object.values(elem)
            .map((element, index) => {
                const sameElementInItem = Object.values(item)[index];
                const productIsArray = Array.isArray(element);
                const productIsObject = typeof element === "object" && element !== null;
                if (productIsObject) return element.value === sameElementInItem.value;
                if (productIsArray && element.length === 1) return element[0] === sameElementInItem[0];
                if (productIsArray && element.length > 1) return true;
                return element === sameElementInItem;
            }).every(el => el === true))
        if (!filteredProduct) cart.push(item);
    })
}
