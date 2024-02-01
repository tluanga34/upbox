import { Route, Routes } from "react-router-dom";
import Home from "../features/home/Home";
import PageHeaderText from "../components/atoms/page_header_text/PageHeaderText";

export default function RootRoutes() {
  return (
    <Routes>
      <Route
        exact
        strict
        path="/"
        element={<Home />}
      />
      <Route
        exact
        strict
        path="/login"
        element={<PageHeaderText text={"Login"}/>}
      />
      <Route
        exact
        strict
        path="/sign-up"
        element={<PageHeaderText text={"Sign Up"}/>}
      />
      <Route
        exact
        strict
        path="/this-month"
        element={<PageHeaderText text={"This Month"}/>}
      />
      <Route
        exact
        strict
        path="/skin"
        element={<PageHeaderText text={"Skin"}/>}
      />
      <Route
        exact
        strict
        path="/hair"
        element={<PageHeaderText text={"Hair"}/>}
      />
      <Route
        exact
        strict
        path="/bath"
        element={<PageHeaderText text={"Bath"}/>}
      />
      <Route
        exact
        strict
        path="/sale"
        element={<PageHeaderText text={"sale"}/>}
      />
    </Routes>
  )
}