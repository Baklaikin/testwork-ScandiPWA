export const getAllProductsQuerry = `{
 categories{
  name
  products{
    id
    name
    gallery
    description
    inStock
    prices{
    currency{
      label
      symbol
    }
    amount
    }
    brand
  }
}
}`;

export const getCategory = (category) => {
  return `{
 category(input:{title: "${category}"}){
  name
  products{
    name
    id
    gallery
    description
    inStock
    prices{
      currency{
        label
        symbol
    }
      amount
    }
      brand
  }
}
}
`};

export const getProduct = (product) => {
 return `{
  product(id:"${product}"){
    id
    name
    inStock
    gallery
    description
    category
    attributes{id
      name
      type
      items{
        displayValue
        value
        id
      }
    }
    prices{
      currency{
        symbol
        label
      }
      amount
    }
    brand
  }
}`
}