import { ContactIt, Item, ListBox } from './ContactList.styled';
import PropTypes from 'prop-types';
import { IconButton } from 'components/IconButton/IconButton';
import { MdDeleteOutline } from 'react-icons/md';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListBox>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <ContactIt>
                {name}: {number}
              </ContactIt>
              <IconButton
                type="button"
                onClick={() => onDelete(id)}
                aria-label="Delete contact"
              >
                <MdDeleteOutline size="20px" />
              </IconButton>
            </Item>
          );
        })}
      </ul>
    </ListBox>
  );
};

Event.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),

  onDelete: PropTypes.func,
};
