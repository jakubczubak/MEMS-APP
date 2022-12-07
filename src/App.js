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
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Navigate replace to="/regural" />} />
            <Route path="/hot" element={<MemeList category="hot" />} />
            <Route path="/regural" element={<MemeList category="regural" />} />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
