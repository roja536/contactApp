
//import "./App.css";
//import NavbarBar from "./components/Navbar";
// import Header from "./components/Header";
//import Header from './components/header/Header';
//import Heading from './components/Heading';
//import Hello from './components/Hello';
//import Form from './components/Form';
//import Image from './components/Image';
import AddContact from './components/Project1/AddContact';
import ContactList from './components/Project1/ContactList';
import Header from './components/Project1/Header';
import { useState, useEffect } from 'react';


function App() {
  const LOCAL_STORAGE_KEY = "Contact"
  const [Contact, setContacts] = useState([]);
  const addContactHandler = (Contacts) => {
    console.log(Contact);
    setContacts([...Contact, Contacts])
  }
  useEffect(() => {
    const returnContactInLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (returnContactInLocalStorage) setContacts(returnContactInLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contact))
  }, [Contact]);

  return (<div>
    <Header />
    <AddContact addContactHandler={addContactHandler} />
    <ContactList Contact={Contact} />
  </div>

  )

}
export default App;


