
export default function productQuantity(cart, item) {
    let filteredAmount = [];
    cart.filter(product => product.id === item.id
        && Object.keys(product).length === Object.keys(item).length)
        .map(prod => Object.values(prod)
            .map((p, index) => {
                const sameElement = Object.values(item)[index];
                const productIsArray = Array.isArray(p);
                const productIsObject = typeof p === "object" && p !== null;
                if (productIsObject && p.id === sameElement.id) return p.value === sameElement.value;
                if (productIsArray && p.length === 1) return p[0] === sameElement[0];
                if (productIsArray && p.length > 1) return true;
                return p === sameElement;
            })
        ).forEach(el => {
            if (el.every(i => i === true)) {
                filteredAmount.push(el);
            }
    })
    return filteredAmount.length;
}
