import { Route, Routes } from "react-router-dom";

import { Home } from "../pages";
import { Details } from "../pages/details";
import { Favorites } from "../pages/favorites";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};
