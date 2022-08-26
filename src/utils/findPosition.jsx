export default function findPosition(cart,item) {
     const data = cart
       .filter(product => product.id === item.id &&
         Object.keys(product).length === Object.keys(item).length)
        .find((prod) => Object.values(prod).map((p, index) => {
            const sameElement = Object.values(item)[index];
            const productIsArray = Array.isArray(p);
            const productIsObject = typeof p === "object" && p !== null;
            if (productIsObject) return p.value === sameElement.value;
            if (productIsArray && p.length === 1) return p[0] === sameElement[0];
            if (productIsArray && p.length > 1) return true;
            return p === sameElement;
        }).every(i => i === true))
  return cart.indexOf(data);
}