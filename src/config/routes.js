import { Route, Routes } from "react-router-dom";
import Home from "../features/home/Home";
import PageHeaderText from "../components/atoms/page_header_text/PageHeaderText";
import DocumentTitle from "../components/atoms/doc_title/DocumentTitle";

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
        element={<DocumentTitle title="Login"><PageHeaderText text={"Login"}/></DocumentTitle>}
      />
      <Route
        exact
        strict
        path="/sign-up"
        element={<DocumentTitle title="Sign Up"><PageHeaderText text={"Sign Up"}/></DocumentTitle>}
      />
      <Route
        exact
        strict
        path="/this-month"
        element={<DocumentTitle title="This Month"><PageHeaderText text={"This Month"}/></DocumentTitle>}
      />
      <Route
        exact
        strict
        path="/skin"
        element={<DocumentTitle title="Skin"><PageHeaderText text={"Skin"}/></DocumentTitle>}
      />
      <Route
        exact
        strict
        path="/hair"
        element={<DocumentTitle title="Hair"><PageHeaderText text={"Hair"}/></DocumentTitle>}
      />
      <Route
        exact
        strict
        path="/bath"
        element={<DocumentTitle title="Bath"><PageHeaderText text={"Bath"}/></DocumentTitle>}
      />
      <Route
        exact
        strict
        path="/sale"
        element={<DocumentTitle title="Sale"><PageHeaderText text={"Sale"}/></DocumentTitle>}
      />
    </Routes>
  )
}