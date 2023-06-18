import { Button, Li, P, Ul } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsById } from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Tooltip } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const deleteContacts = (id, contactName) => {
    dispatch(deleteContactsById(id));
    toast.success(
      `The contact "${contactName}" has been successfully deleted.`
    );
  };

  const filterContacts = () => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  return (
    <>
      {contacts.length <= 0 ? (
        <P>No contacts were found for this request</P>
      ) : filterContacts().length <= 0 ? (
        <P>No contacts found for this search "{filter}"</P>
      ) : (
        <Ul>
          {filterContacts().map(({ id, name, number }) => {
            return (
              <Li key={id}>
                {name} : {number}
                <Tooltip title="Delete contacts">
                  <Button
                    type="button"
                    onClick={() => {
                      deleteContacts(id);
                    }}
                  >
                    <PersonRemoveIcon></PersonRemoveIcon>
                  </Button>
                </Tooltip>
              </Li>
            );
          })}
        </Ul>
      )}
    </>
  );
};
