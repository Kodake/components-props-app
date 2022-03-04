import React from 'react'

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
                <React.Fragment key={event.id}>
                    <h2>{index} - {event.title}</h2>
                    <button onClick={() => deleteEvent(event.id)}>Delete event</button>
                </React.Fragment>
            ))}
        </div>
    )
}

export default EventList;
