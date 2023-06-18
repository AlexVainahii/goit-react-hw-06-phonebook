import { ToastContainer } from 'react-toastify';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { P } from './ContactList/ContactList.styled';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { useSelector } from 'react-redux';
import { Container, SectionContainer } from './App.styled';
export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  return (
    <SectionContainer>
      <ToastContainer autoClose={3000} draggable={false} />
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length <= 0 ? (
          <P>No contacts in Phonebook</P>
        ) : (
          <Container>
            <Filter />
            <ContactList />
          </Container>
        )}
      </Section>
    </SectionContainer>
  );
};
