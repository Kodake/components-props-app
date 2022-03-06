import { useRef, useState } from 'react';
import './NewEventForm.css';

interface Props {
    addEvent: (event: { title: string, date: string, location: string, id: number }) => void;
}

const NewEventForm = ({addEvent}: Props) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('manchester');

    // const title = useRef();
    // const date = useRef();

    const resetForm = () => {
        setTitle('');
        setDate('');
        setLocation('manchester');
    }

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }

        addEvent(event);
        resetForm();
    }

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.target.value);
    // }

    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input
                    type='text'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    value={title} />
            </label>

            <label>
                <span>Event Date:</span>
                <input
                    type='date'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
                    value={date} />
            </label>

            <label>
                <span>Event Location:</span>
                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLocation(e.target.value)}>
                    <option value='manchester'>Manchester</option>
                    <option value='london'>London</option>
                    <option value='cardiff'>Cardiff</option>
                </select>
            </label>

            <button>Submit</button>

            <p>title - {title}, date - {date}, location - {location}</p>
            <p onClick={resetForm}>Reset Form</p>
        </form>
    )
}

export default NewEventForm;
