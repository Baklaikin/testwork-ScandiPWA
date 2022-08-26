import { Component } from "react";
import { Container, Title, Link } from "./NotFound.styled";

export default class NotFound extends Component {
    render(){
        return (
            <Container>
                <Title>No match found</Title>
                <Link to="/">Return to Home Page</Link>
            </Container>
        )
    }
}