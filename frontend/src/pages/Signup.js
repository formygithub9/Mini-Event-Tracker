import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "", confirmpassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(form.confirmpassword!==form.password){
      alert("Password and Confirm Password do not match.");
      return;
    }
    const res = await fetch("http://127.0.0.1:8000/api/accounts/signup/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username:form.username,email:form.email,password:form.password}),
    });
    if (res.ok) {
      alert("Signup successful");
      navigate("/login");
    } else {
      alert("Error signing up");
    }
  };

  return (
    <Layout>
        <div className="col-md-6 offset-md-3">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input className="form-control" name="username" placeholder="Username" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input className="form-control" name="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input className="form-control" name="password" type="password" placeholder="Password" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input className="form-control" name="confirmpassword" type="password" placeholder="Confirm Password" onChange={handleChange} required />
        </div>
        <button className="btn btn-primary" type="submit">Signup</button>
      </form>
    </div>
    </Layout>
  );
}