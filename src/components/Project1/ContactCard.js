import React from 'react'

function ContactCard(props) {
    const { id, name, email } = props.Contact;
    return (
        <div>
            <div>{name}</div>
            <div>{email}</div>
        </div>
    );
}

export default ContactCard