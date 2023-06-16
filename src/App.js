import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
function App() {
  return (
    <Router>
      <div className="App">
        <h2>React Exercises</h2>
        <div className="menu">
          <ul>
            <li>
              <Link to="/exercise-1">Exercise 1</Link>
            </li>
            <li>
              <Link to="/exercise-2">Exercise 2</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/exercise-1" element={<Exercise1 />}></Route>
          <Route path="/exercise-2" element={<Exercise2 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
