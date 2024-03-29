import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);
    const ContactList = props.Contact.map((Contact) => {
        return (
            <ContactCard Contact={Contact} />
        );
    });
    return (
        <div>
            <div className='container'>
                <h3 style={{ marginLeft: '10px' }}>{ContactList}</h3>
            </div>
        </div>
    )
}

export default ContactList