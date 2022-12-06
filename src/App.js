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
import { useState, useEffect } from 'react'

function App() {

  const [list, setList] = useState([]);
  const [hotList, setHotList] = useState([])

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await (await fetch("http://localhost:4000/mems")).json();
      setList(data);

    };
    // call the function
    fetchData()
    
      // make sure to catch any error
      .catch(console.error);

  }, []);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate replace to="/regural" />} />
          <Route path="/hot" element={<MemeList category='hot' list={list} />} />
          <Route path="/regural" element={<MemeList category='regural' list={list} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
