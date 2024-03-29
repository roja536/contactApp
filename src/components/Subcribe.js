import React from "react";
import { Component } from "react";

class Class1 extends Component {
    constructor() {
        super()
        this.state = {
            Message: 'welcome visitor'
        }
    }
    changeMessage() {
        this.setState({
            Message: 'Thank you for subcribing'
        })
    }
    render() {
        return (<div>
            <center>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changeMessage()}>Subcribe</button>
            </center>
        </div>
        )
    }
}
export default Class1;