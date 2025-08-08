import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./pages/Home"
import BookAppointment from "./pages/BookAppointment";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BookAppointment />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;