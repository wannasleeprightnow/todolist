import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import Main from "./pages/Main/Main.tsx";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}
