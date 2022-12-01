import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate replace to="/hot" />} />
          <Route path="/hot" element={<Main />} />
          <Route path="/regural" element={<Main />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
