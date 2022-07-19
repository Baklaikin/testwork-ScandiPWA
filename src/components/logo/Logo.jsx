import { Component } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import {Logo} from "./Logo.styled";

export default class Logotype extends Component{
    render() {
        return  <Logo>
                    <NavLink to="/" onClick={() => this.props.onChange("all")}>
                        <LogoIcon />
                    </NavLink>
                </Logo>
    }
}