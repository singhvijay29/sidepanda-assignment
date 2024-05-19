import "./App.css";
import AppointmentBooking from "./components/AppointmentBooking";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="layout">
      <Navbar />
      <AppointmentBooking />
    </div>
  );
}

export default App;
