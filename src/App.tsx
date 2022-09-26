import { Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Menu from "./Menu";

export default function App() {
  return (
    <>
      <h1 className="text-7xl mb-4 font-bold text-center">React Restaurant</h1>
      <nav className="bg-black text-white h-15 p-2">
        <ul className="flex">
          <li className="mr-2">
            <Link to="/">Home </Link>
          </li>
          <li className="mr-2">
            <Link to="/admin"> Admin </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}
