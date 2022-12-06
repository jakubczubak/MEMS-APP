import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { MemeList } from "./components/MemeList";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate replace to="/hot" />} />
          <Route path="/hot" element={<MemeList category='hot' />} />
          <Route path="/regural" element={<MemeList category='regural' />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
