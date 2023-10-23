import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Posteos from "../views/posteos/Posteos";
import Navbar from "../components/Navbar";
import Crear from "../views/crear/Crear";
import LeerPost from "../views/leerPosts/LeerPost";
import Login from "../views/login/Login";
import Logout from "../views/Logout";
import { RoutesProtect } from "./RoutesProtect";
import ModificarPost from "../views/modificarPost/ModificarPost";
import Error404 from "../views/error404/Error404";

export default function RoutesBlog() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
          <Route path={process.env.PUBLIC_URL + "/login"} element={<Login />} />
          <Route
            path={process.env.PUBLIC_URL + "/logout"}
            element={<Logout />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/"}
            element={<RoutesProtect />}
          >
            <Route
              path={process.env.PUBLIC_URL + "/crear"}
              element={<Crear />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/posteos"}
              element={<Posteos />}
            />
            <Route
              path={process.env.PUBLIC_URL + "posteos/leer/:id"}
              element={<LeerPost />}
            />
            <Route
              path={process.env.PUBLIC_URL + "posteos/leer/:id/modificar"}
              element={<ModificarPost />}
            />
          </Route>
          <Route path={process.env.PUBLIC_URL + "*"} element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
