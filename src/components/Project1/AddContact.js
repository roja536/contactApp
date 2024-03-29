import React, { Component } from 'react'
import "./AddContacts.css";

class AddContact extends Component {
    state = {
        name: '',
        email: ''
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" && this.state.email === "") {
            alert("All fields are reuired");
            return
        }
        this.props.addContactHandler(this.state);

        this.setState({ name: "", email: "" });
    }
    render() {
        return (
            <div>
                <h2>Add Contact</h2>
                <form className='form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>

                        <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    </div>
                    <div className='field'>
                        <label>Email</label>

                        <input type='text' placeholder='Email' name='email' value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    </div>
                    <button className='btu'>ADD</button>
                </form>
            </div>
        );
    }
}

export default AddContact