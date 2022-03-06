import styles from './EventList.module.css';

interface EventDance {
    title: string;
    id: number;
    location?: string;
}

interface Props {
    events: EventDance[];
    deleteEvent: (id: number) => void;
}

const EventList = ({ events, deleteEvent }: Props) => {
    return (
        <div>
            {events.map((event, index) => (
                <div className={styles.card} key={event.id}>
                    <h2>{index} - {event.location} - {event.title}</h2>
                    <button onClick={() => deleteEvent(event.id)}>Delete event</button>
                </div>
            ))}
        </div>
    )
}

export default EventList;
