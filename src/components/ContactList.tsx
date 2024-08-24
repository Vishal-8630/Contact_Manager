import { FC } from 'react'
import { Action, Contact } from '../contactsReducer'
import ContactItem from './ContactItem';

interface ContactListProps {
  contacts: Contact[];
  dispatch: React.Dispatch<Action>;
  handleEdit: (id: Number) => void;
}

const ContactList: FC<ContactListProps> = ({ contacts, dispatch, handleEdit }) => {
  return (
    <div className='contacts-list'>
      <h3 className='contacts-list-title'>List of Contacts</h3>
      <div className='contacts-list-table-container'>
        <table className='contacts-list-table'>
          <thead className='contacts-list-header'>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <ContactItem
                key={contact.id}
                {...contact}
                handleEdit={handleEdit}
                dispatch={dispatch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactList