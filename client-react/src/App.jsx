
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<SignIn />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;