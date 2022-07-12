import { Component } from "react";

export default class CartProduct extends Component{
    render() {
        return (
            <div>
                <ul>
                    {this.props.inCart && this.props.inCart.map((item) => {
                        return <li key={item}>
                            <div>
                                <div>
                                    <h2>{this.props.product}</h2>
                                <p>{this.props.price}</p>
                                <p>{this.props.size}</p>
                                <ul className="size"></ul>
                                <p>{this.props.color}</p>
                                <ul className="color"></ul>
                                </div>
                                <div className="plus-minus">
                                    <div>+</div>
                                    <div>0</div>
                                    <div>-</div>
                                </div>
                                <div className="photo"></div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        );
}
}