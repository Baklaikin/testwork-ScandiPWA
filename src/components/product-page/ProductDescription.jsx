import { Component } from "react"
export default class ProductDescription extends Component {
    state = {
        text: ``
    }
    componentDidMount() {
    if(this.props.text) this.setState({text: this.props.text})
    }
    
    render() {
        const textBlock = document.getElementById("description");
        if (textBlock) return textBlock.innerHTML = this.state.text
    }    
}