import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./app.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ShopDrinks from "./pages/ShopDrinks";
import ShopFood from "./pages/ShopFood";
import ReviewUser from "./pages/ReviewUser";
import Admin from "./pages/Admin";
import LoginPage from "./pages/LoginPage";
import Register from "./components/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/truclycoffe/login" element={<LoginPage />} />
          <Route path="/truclycoffe/register" element={<Register />} />
          <Route path="/truclycoffe/drinkshop" element={<ShopDrinks />} />
          <Route path="/truclycoffe/foodshop" element={<ShopFood />} />
          <Route path="/truclycoffe/login/loggedin/admin" element={<Admin />} />
          <Route path="/truclycoffe/reviewformuser" element={<ReviewUser />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
