import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { GlobalProvider } from "./GlobalContext";
import PageLayout from "./components/PageLayout/PageLayout";
import Homepage from "./components/Homepage/Homepage";
import AddProduct from "./components/AddProduct/AddProduct";
import ProductDetail from "./components/ProductDetail/ProductDetail";





function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Homepage />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="product-detail/:id" element={<ProductDetail />} />

      </Route>
    )
  );

  return (
    <>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </>
  );
}

export default App;
