import './Tickets.css';
import { DummyTickets } from '../../Assets/DummyData';

export default function Tickets() {
  return (
    <section className="tickets">
      <h1>Book Tickets</h1>
      <ul className="ticket-list">
        {DummyTickets.map((t, i) => {
          return (
            <li className="ticket-items" key={i}>
              <div className="date">{t.date}</div>
              <div className="city">{t.city}</div>
              <div className="place">{t.place}</div>
              <button type="button">Book</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
