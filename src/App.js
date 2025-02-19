import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<h1>Hello</h1>} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
