import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import ShareEvent from "./pages/ShareEvent";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/share/:token" element={<ShareEvent />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;