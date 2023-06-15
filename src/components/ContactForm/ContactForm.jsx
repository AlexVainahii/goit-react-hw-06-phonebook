import { Button, Form, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, addContact } from '../../redux/contacts/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const formSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    if (
      contacts.find(option => option.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts list`);
      return false;
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
      name.value = '';
      number.value = '';
      return true;
    }
  };

  return (
    <>
      <Form onSubmit={formSubmit}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};
