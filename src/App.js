import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Customer from "./Pages/Customer";
import CustomerInfo from "./Pages/CustomerInfo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Customer" element={<Customer />} />
        <Route path="/CustomerInfo" element={<CustomerInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
//how to make sidebar in react?

export default App;
