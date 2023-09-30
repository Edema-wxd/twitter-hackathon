import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/landing/Landing";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<h1>no page</h1>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
