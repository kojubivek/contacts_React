import { useState, useEffect } from "react";

import CardList from "./components/card-list/Card-List.component";
import SearchBox from "./components/search-box/Search-Box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setContacts(users));
  }, []);

  useEffect(() => {
    const newFilteredContacts = contacts.filter((contact) => {
      return contact.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredContacts(newFilteredContacts);
  }, [contacts, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="text-center text-primary">Contacts</h1>

      <SearchBox
        className="contacts-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Contacts"
      />
      <CardList contacts={filteredContacts} />
    </div>
  );
};

export default App;
