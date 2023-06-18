import { Input } from 'components/ContactForm/ContactForm.styled';
import { Card } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filterContacts = e => {
    console.log(e.target.value);
    dispatch(changeFilter(e.target.value));
  };
  return (
    <Card>
      <label htmlFor="filter">Find contacts by name</label>
      <Input
        type="text"
        name="filter"
        onChange={e => {
          filterContacts(e);
        }}
      />
    </Card>
  );
};
