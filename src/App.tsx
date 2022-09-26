import { Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Menu from "./Menu";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">React Restaurant</h1>
      <nav className="bg-indigo-400 p-2">
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
