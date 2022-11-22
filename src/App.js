import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import customer from "./Pages/Customer";
import customerInfo from "./Pages/CustomerInfo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/customer" element={<Customer />} />
        <Route path="/customerInfo" element={<CustomerInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
//how to make sidebar in react?

export default App;
