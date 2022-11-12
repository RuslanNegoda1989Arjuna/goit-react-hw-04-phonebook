import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { PhonebookContainer, Title, TitleCont } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { load, save } from './LocalStorage/LocalStorage';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // додавання в  localStorage
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      save('contacts', contacts);
    }
  }

  // з локалсторидж при першому завантаженні забираємо данні

  componentDidMount() {
    const lstContacts = load('contacts');

    if (lstContacts) {
      this.setState({ contacts: lstContacts });
    }
  }

  addContact = addContact => {
    const { contacts } = this.state;
    // запис id до кожного контакту за допомогою бібіліотеки
    addContact.id = nanoid(10);
    if (contacts.find(contact => contact.name === addContact.name)) {
      return alert(`${addContact.name} is already is contacts`);
    }
    this.setState(prevState => ({
      contacts: [addContact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  //  в попередньому state фільтруємо по id, залишаємо всі, де не співпадають id
  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    // фільтруємо контакти, filter нормалізуємо,
    //  щоб на кажній ітерації не викликати ловерКейс
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <Title>PhoneBook</Title>

        <PhonebookContainer>
          <PhonebookForm onSubmit={this.addContact} />
        </PhonebookContainer>
        <TitleCont>Contacts</TitleCont>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
