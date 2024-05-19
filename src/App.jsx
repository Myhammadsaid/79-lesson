import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SingleRoute from "./pages/single/SingleRoute";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<SingleRoute />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
