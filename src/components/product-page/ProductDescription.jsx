import { Component } from "react";
import { DescriptionText } from './ProductPage.styled';
import DOMPurify from 'dompurify';

export default class ProductDescription extends Component {
    state = {
        text: ``
    }
    componentDidMount() {
        if (this.props.text) this.setState({ text: DOMPurify.sanitize(this.props.text)})
    }
    render() {
        return <DescriptionText dangerouslySetInnerHTML={{ __html: this.state.text}}></DescriptionText>
    }    
}