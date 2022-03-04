import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [name, setName] = useState('Mario');
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Mario's birthday bash", id: 1 },
    { title: "Bowser's live stream", id: 2 },
    { title: "Race on moo moo farm", id: 3 },
  ]);

  const handleClick = () => {
    setName('Luigi');
  }

  const deleteEvent = (id: number) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      });
    });
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const subtitle = 'All the latest events in Marioland';
  const anotherSub = 'Another subtitle';

  return (
    <div className="App">
      <Title title='Events in Your Area' subtitle={subtitle} />
      <Title title='Another title' subtitle={anotherSub} />
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change Name</button>

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}

      {showEvents && <EventList events={events} deleteEvent={deleteEvent} />}

      {!showModal && (
        <div>
          <button onClick={() => setShowModal(true)}>Show modal</button>
        </div>
      )}

      {showModal && <Modal handleClose={handleClose}>
        <h2>10% Off Coupon Code!!!</h2>
        <p>Use the code NINJA10 at the checkout</p>
      </Modal>}
    </div>
  );
}

export default App;
