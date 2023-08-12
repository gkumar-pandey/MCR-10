import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AddProductPage, DashboardPage, DepartmentPage } from "./pages";
import ProductListPage from "./pages/productlist-page/ProductListPage";
import { LayoutComponent, SideBar } from "./components";
import { ProductDetailsPage } from "./pages/product-details/product-details-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutComponent>
          <SideBar />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/department" element={<DepartmentPage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
          </Routes>
        </LayoutComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
