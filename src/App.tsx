import { BrowserRouter } from "react-router-dom";
import { PokeProvider } from "./context/pokeContext";
import { AppRoutes } from "./routes/app.routes";

export const App = () => {
  return (
    <BrowserRouter>
      <PokeProvider>
        <AppRoutes />
      </PokeProvider>
    </BrowserRouter>
  );
};
