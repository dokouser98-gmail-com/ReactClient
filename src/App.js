import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Foteer from "./components/Footer";
import Home from "./pages/Home";
import ProductScreen from "./pages/ProductScreen";
import Error from "./components/Error";
export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-blue-900">
        <Layout />
      </nav>

      <div>
        <main>
          <Routes>
            <Route>
              <Route path="/producto/:slug" element={<ProductScreen />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Route>
          </Routes>
        </main>
      </div>
      <Foteer />
    </BrowserRouter>
  );
}
