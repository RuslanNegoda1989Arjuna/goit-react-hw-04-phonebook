import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import { PhonebookContainer, Title, TitleCont } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { load, save } from '../LocalStorage/LocalStorage';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export const App = () => {
  const [contacts, setContacts] = useState(load('contacts') ?? []);
  const [filter, setFilter] = useState('');

  // додавання в  localStorage

  useEffect(() => {
    save('contacts', contacts);
  }, [contacts]);

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
