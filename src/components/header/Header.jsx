import { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Navigation, List, Item } from "./Header.styled";

export default class Header extends Component{
    render() {
        return (
            <Container>
                <Navigation>
                    <List>
                        {this.props &&
                            this.props.categories
                                .map(prop => 
                                    <Item key={prop.name}>
                                        <NavLink to={`/${prop.name}`} onClick={() => this.props.onChange(`${prop.name}`)}> {prop.name}</NavLink>
                                    </Item>)}
                    </List>
                </Navigation>
                    <div>Logo</div>
                    <div>Cart</div>
            </Container>
        )
    }
}