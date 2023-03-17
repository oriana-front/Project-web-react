import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Root from "./root";
import Error404 from "../Error/Error404";

function RouterApp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Root/>}>
        <Route index element={<Login/>}></Route>
      </Route>
      <Route path='*' element={<Error404/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;