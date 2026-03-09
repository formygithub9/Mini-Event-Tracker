import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{event.title}</h5>
          <p className="card-text">{event.location}</p>
          <p className="card-text">{new Date(event.datetime).toLocaleString()}</p>
          <Link to={`/share/${event.share_token}`} className="btn btn-primary btn-sm">Share Link</Link>
        </div>
      </div>
    </div>
  );
}