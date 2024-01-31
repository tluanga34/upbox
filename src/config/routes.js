import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Home from "../features/home/Home";

export default function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          strict
          path="/"
          element={<Home/>}
        />
      </Routes>
    </BrowserRouter>
  )
}