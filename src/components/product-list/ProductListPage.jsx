import { Component } from "react";
import ProdCard from "../product-card/ProdCard";
import { getInfo } from "../../api/api";
import { getCategory } from "../../queries/queries";
import { List, Item, Container, CategoryTitle, ItemLi } from "../product-list/ProductListPage.styled";

export default class ProductListPage extends Component{
  state = {
    }
    
  componentDidMount() {
    if (this.props.category) {
      getInfo(getCategory(this.props.category))
        .then(res => { this.setState({ products: res.category.products }) })
      localStorage.setItem("category", JSON.stringify(this.props.category))
    } else {
      getInfo(getCategory("all"))
        .then(res => { this.setState({ products: res.category.products }) })
    }    
  }
  
  componentDidUpdate(prevProps, _) {
    if (prevProps.category !== this.props.category) {
      getInfo(getCategory(this.props.category))
        .then(res => this.setState({ products: res.category.products }))
    }
  }

  render() {
    const { category, currency, setProduct, inCart } = this.props;
    const { products } = this.state;
      return (
        <Container>
          <CategoryTitle>{category}</CategoryTitle>
            <List> 
            {products &&
              products.map(prod => {
                const price = prod.prices
                  .find(price => price.currency.symbol === currency.trim())
                return(
                  <ItemLi key={prod.id}>
                    <Item
                      to={`/${category}/${prod.id}`}
                      key={prod.id}
                    >
                      <ProdCard
                        value={prod}
                        price={price.amount}
                        currency={currency}
                        handleClick={setProduct}
                        inCart={inCart}
                      />
                    </Item>
                  </ItemLi>)
                }
              )
            }
          </List>
        </Container>
      )
  }
}