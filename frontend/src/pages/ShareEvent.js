import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShareEvent() {
  const { token } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch(`http://127.0.0.1:8000/api/events/share/${token}/`);
      if (res.ok) {
        const data = await res.json();
        setEvent(data);
      } else {
        alert("Event not found");
      }
    };
    fetchEvent();
  }, [token]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className="col-md-6 offset-md-3">
      <h2>{event.title}</h2>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Date & Time:</strong> {new Date(event.datetime).toLocaleString()}</p>
      <p><strong>Description:</strong> {event.description}</p>
    </div>
  );
}