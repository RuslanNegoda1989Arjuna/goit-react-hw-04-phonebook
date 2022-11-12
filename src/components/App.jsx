import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { PhonebookContainer, Title, TitleCont } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { load, save } from './LocalStorage/LocalStorage';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // додавання в  localStorage
  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;

  //   if (contacts !== prevState.contacts) {
  //     save('contacts', contacts);
  //   }
  // }

  // з локалсторидж при першому завантаженні забираємо данні

  // componentDidMount() {
  //   const lstContacts = load('contacts');

  //   if (lstContacts) {
  //     this.setState({ contacts: lstContacts });
  //   }
  // }

  const addContact = addContact => {
    // запис id до кожного контакту за допомогою бібіліотеки
    addContact.id = nanoid(10);
    if (contacts.find(contact => contact.name === addContact.name)) {
      return alert(`${addContact.name} is already is contacts`);
    }
    setContacts(state => [addContact, ...state]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  //  в попередньому state фільтруємо по id, залишаємо всі, де не співпадають id
  const deleteContact = idContact => {
    setContacts(state => state.filter(contact => contact.id !== idContact));
  };

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
        <PhonebookForm onSubmit={addContact} />
      </PhonebookContainer>
      <TitleCont>Contacts</TitleCont>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};
