import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductScreen from "./pages/ProductScreen";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route>
              <Route path="/producto/:slug" element={<ProductScreen />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
