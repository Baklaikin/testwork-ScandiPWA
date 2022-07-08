import { Component } from "react";
import ProdCard from "../product-card/ProdCart";
import { getInfo } from "../../api/api";
import { getCategory } from "../../queries/queries";
import { List, Item, Container, CategoryTitle, ItemLi } from "../product-list/ProductListPage.styled";

export default class ProductListPage extends Component{
    state = {}
    
    componentDidMount() {
      if (this.props.category) {
        getInfo(getCategory(this.props.category)).then(res => { this.setState({ products: res.category.products }) })
        localStorage.setItem("category", JSON.stringify(this.props.category))
      } else {
        getInfo(getCategory("all")).then(res => { this.setState({ products: res.category.products }) })
      } 
      
  }
  
  componentDidUpdate(prevProps,_) {
    if (prevProps.category !== this.props.category) {
      getInfo(getCategory(this.props.category)).then(res => this.setState({products:res.category.products}))
    }
  }
    render() {
      return (
        <Container>
          <CategoryTitle>{ this.props.category}</CategoryTitle>
            <List> 
            {this.state.products && this.state.products.map(prod => {
              return(
              <ItemLi key={prod.id}>
                <Item to={`/${this.props.category}/${prod.id}`} key={prod.id}>
                <ProdCard value={prod} handleClick={this.props.handleClick} />
              </Item>
              </ItemLi>)
            })}
          </List>
          </Container>
        )
}
}