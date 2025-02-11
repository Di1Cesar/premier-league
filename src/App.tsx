import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "./Pages/Index";
import TelaJogadores from "./Pages/TelaJogadores";
import TelaTimes from "./Pages/TelaTimes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/jogadores" element={<TelaJogadores />} />
        <Route path="/times" element={<TelaTimes />} />
      </Routes>
    </Router>
  );
}

export default App;