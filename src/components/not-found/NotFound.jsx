import { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
    render(){
        return <><h1>No match found</h1>
        <Link to="/">Return to Home Page</Link></>;
}
}