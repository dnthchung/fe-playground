import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
      <Sidebar />
    </Router>
  );
}
