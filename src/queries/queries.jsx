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
  const data = `"${product}"`;
  return `{
    product(id:${data}){
      id
      name
      inStock
      gallery
      description
      category
      attributes{
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
      prices{
        currency {
          symbol
          label
        }
        amount
      }
      brand
    }
  }`
}

export const getCategoriesQuerry = `{
  categories {
    name
  }
}`

export const getCurrencyQuerry = `
  {currencies
    { label
      symbol
    }
  }`