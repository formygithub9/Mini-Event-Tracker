import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [events, setEvents] = useState([]);
    const [filter, setFilter] = useState("");
    const navigate = useNavigate();
    const fetchEvents = async (filterValue) => {
        const token = localStorage.getItem("access_token");
        const res = await fetch(`http://127.0.0.1:8000/api/events/?filter=${filterValue}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
            const data = await res.json();
            setEvents(data);
        } else {
            navigate('/login')
        }
    };

    useEffect(() => {
        fetchEvents(filter);
    }, [filter]);

    return (
        <Layout>
            <div className="container">
                <h2>Your Events</h2>
                <div className="mb-3">
                    <button className="btn btn-secondary me-2" onClick={() => setFilter("")}>All</button>
                    <button className="btn btn-success me-2" onClick={() => setFilter("upcoming")}>Upcoming</button>
                    <button className="btn btn-warning me-2" onClick={() => setFilter("past")}>Past</button>
                </div>
                <div className="row">
                    {events.map((e) => (
                        <EventCard key={e.id} event={e} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}