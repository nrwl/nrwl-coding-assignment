import React, { useEffect, useState } from "react";
import "./app.css";
import { BackendService, Ticket } from "../backend";

interface AppProps {
  backend: BackendService;
}

const App = ({ backend }: AppProps) => {
  const [tickets, setTickets] = useState([] as Ticket[]);

  // The backend returns observables, but you can convert to promises if
  // that is easier to work with. It's up to you.
  useEffect(() => {
    const fetchData = async () => {
      const result = await backend.tickets().toPromise();
      setTickets(result);
    };
    fetchData();

    // Example of use observables directly
    // const sub = backend.tickets().subscribe(result => {
    //   setTickets(result);
    // });
    // return () => sub.unsubscribe(); // clean up subscription
  }, [backend]);

  return (
    <div className="app">
      <h2>Tickets</h2>
      {tickets ? (
        <ul>
          {tickets.map(t => (
            <li key={t.id}>
              Ticket: {t.id}, {t.description}
            </li>
          ))}
        </ul>
      ) : (
        <span>...</span>
      )}
    </div>
  );
};

export default App;
