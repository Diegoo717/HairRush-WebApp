import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'
import Home from "./pages/Home"
import BookAppointment from "./pages/BookAppointment"
import ContactInformation from "./pages/ContactInformation"
import Services from "./pages/Services"
import AppointmentCalendar from "./pages/AppointmentCalendar"

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/contact-information" element={<ContactInformation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment-calendar" element={<AppointmentCalendar />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App