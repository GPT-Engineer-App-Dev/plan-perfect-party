import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import EventList from "./pages/EventList.jsx";
import TicketBooking from "./pages/TicketBooking.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/event-list" element={<EventList />} />
      <Route path="/ticket-booking" element={<TicketBooking />} />
      </Routes>
    </Router>
  );
}

export default App;