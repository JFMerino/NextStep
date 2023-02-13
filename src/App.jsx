import "./App.css";
import { Home } from "./component/Home";
import Login from "./component/Login";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
