import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function CreateEvent() {
    const [form, setForm] = useState({ title: "", datetime: "", location: "", description: "" });
    const navigate = useNavigate();
    const token = localStorage.getItem("access_token");
    useEffect(()=>{
        if(!token){
        navigate('/login');
        return;
    }
    },[])
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("access_token");
        const res = await fetch("http://127.0.0.1:8000/api/events/create/", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify(form),
        });
        if (res.ok) {
            alert("Event created");
            navigate("/");
        } else {
            alert("Error creating event");
        }
    };

    return (
        <Layout>
            <div class="container">
                <div className="col-md-6 offset-md-3">
                <h2>Create Event</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input className="form-control" name="title" placeholder="Title" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input className="form-control" name="datetime" type="datetime-local" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <input className="form-control" name="location" placeholder="Location" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" name="description" placeholder="Description" onChange={handleChange}></textarea>
                    </div>
                    <button className="btn btn-success" type="submit">Create Event</button>
                </form>
            </div>
            </div>
        </Layout>
    );
}