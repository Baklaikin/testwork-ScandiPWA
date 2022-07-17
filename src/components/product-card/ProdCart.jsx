import { Component } from "react";
import { Container, Thumb, Image, Title, OutOfStockText, OutOfStockContainer } from "./ProdCard.styled";
 
export default class ProdCard extends Component {
    state = {}
  
    componentDidUpdate(prevProps, _) {
        if (prevProps.currency !== this.props.currency) {
            this.setState({ currency: this.props.currency })
        }
    }
 
    render() {
        const { gallery, description, name, inStock, id } = this.props.value;
        return (
            <Container onClick={()=>this.props.handleClick(id)}>
                <Thumb>
                    <Image src={gallery[0]} alt={description} />
                        {!inStock &&
                            <OutOfStockContainer>
                                <OutOfStockText>
                                    Out of Stock
                                </OutOfStockText>
                        </OutOfStockContainer>
                        }
                </Thumb>
                <Title>{name }</Title>
                <Title>{this.props.currency}{this.props.price}</Title>
            </Container>
        )
    }

}
