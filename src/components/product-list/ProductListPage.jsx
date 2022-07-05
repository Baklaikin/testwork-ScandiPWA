import { Component } from "react";
import { List, Item, Container } from "../product-list/ProductListPage.styled";
import ProdCard from "../product-card/ProdCart";
import { getInfo } from "../../api/api";
import { getCategory } from "../../queries/queries";

export default class ProductListPage extends Component{
    state = {}
    
    componentDidMount() {
      if (this.props.category) {
        getInfo(getCategory(this.props.category)).then(res => { this.setState({ products: res.category.products }) })
        localStorage.setItem("category", JSON.stringify(this.props.category))
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
            <List> 
            {this.state.products && this.state.products.map(prod => {
              return <Item to={`/${this.props.category}/${prod.id}`} key={prod.id}>
                <ProdCard value={prod} handleClick={this.props.handleClick} />
              </Item>
            })}
          </List>
          </Container>
        )
}
}