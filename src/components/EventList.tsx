import React from 'react';
import styles from './EventList.module.css';

interface Event {
    title: string;
    id: number;
}

interface Props {
    events: Event[];
    deleteEvent: (id: number) => void;
}

const EventList = ({ events, deleteEvent }: Props) => {
    return (
        <div>
            {events.map((event, index) => (
                <div className={styles.card} key={event.id}>
                    <h2>{index} - {event.title}</h2>
                    <button onClick={() => deleteEvent(event.id)}>Delete event</button>
                </div>
            ))}
        </div>
    )
}

export default EventList;
