import { useEffect, useReducer, useState } from "react";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import { Contact, contactsReducer, State } from "./contactsReducer";
import ContactList from "./components/ContactList";
import EditModal from "./components/EditModel";

const initialState: State = {
  contacts: [],
};

function App() {
  const [state, dispatch] = useReducer(contactsReducer, initialState);
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>();

  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined);
    }
  }, [showModal]);

  const toggleModal = () => {
    setShowModal((show: Boolean) => !show);
  };

  const handleEdit = (id: Number) => {
    setDataToEdit(state.contacts.find((contact) => contact.id === id));
    toggleModal();
  };

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <ContactForm dispatch={dispatch} />
        <hr />
        {state.contacts.length > 0 && (
          <ContactList
            contacts={state.contacts}
            handleEdit={handleEdit}
            dispatch={dispatch}
          />
        )}
      </div>
      <EditModal
        showModal={showModal}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
