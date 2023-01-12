import { Route, Routes } from "react-router-dom";

import { Home } from "../pages";
import { Details } from "../pages/details";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};
