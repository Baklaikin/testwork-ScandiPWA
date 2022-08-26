import { Component } from "react";
import {Item, List, NavItem} from "./NavigationList.styled"

export default class NavigationList extends Component{
    render() {
        return (
            <List>
                {this.props &&
                    this.props.categories.map(prop => {
                        const activeLink = this.props.category === prop.name ? "active" : '';
                        return (
                            <Item
                                key={prop.name}
                                className={activeLink}
                            >
                                <NavItem to={`/${prop.name}`}
                                    onClick={() => this.props.onChange(`${prop.name}`)}
                                    > {prop.name.toUpperCase()}
                                </NavItem>
                            </Item>)
                    })
                }
            </List>
        )
    }
}