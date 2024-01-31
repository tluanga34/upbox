import { Route, Routes } from "react-router-dom";
import Home from "../features/home/Home";

export default function RootRoutes() {
  return (
    <Routes>
      <Route
        exact
        strict
        path="/"
        element={<Home />}
      />
    </Routes>
  )
}