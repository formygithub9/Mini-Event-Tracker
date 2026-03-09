import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Layout = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const fetchUser = async () => {
        const token = localStorage.getItem("access_token");

        if (!token) {
            setIsLoggedIn(false);
            return;
        }

        try {
            const res = await fetch("http://127.0.0.1:8000/api/accounts/me/", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (res.ok) {
                const data = await res.json();
                setUserName(data.username);
                setIsLoggedIn(true);
            } else {
                localStorage.removeItem("access_token");
                setUserName("");
                setIsLoggedIn(false);
            }
        } catch (err) {
            console.log("Error fetching user:", err);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        setUserName("");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <Link to="/" className="navbar-brand fw-bold">
                        Event Tracker
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto">

                            {!isLoggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <Link to='/signup' className="nav-link">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/login' className="nav-link">Login</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link to='/create' className="nav-link">Create Event</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to='/' className="nav-link">Dashboard</Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-capitalize" role="button" data-bs-toggle="dropdown">
                                            {userName}
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li>
                                                <button className="dropdown-item" onClick={handleLogout}>
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            )}

                        </ul>

                    </div>
                </div>
            </nav>

            <div>{children}</div>

            <footer className='text-center py-3 fixed-bottom'>
                <div className="container">
                    <p>&copy; Mini Event Tracker</p>
                </div>
            </footer>

        </>
    );
};

export default Layout;