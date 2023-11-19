import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnceUseEffect from "./pages/OnceUseEffect";
import OutsideClickPage from "./pages/OutsideClickPage";
import UseRouterPage from "./pages/UseRouterPage";
import DebouncedInput from "./pages/UseDebounce";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseRouterPage></UseRouterPage>} />
        <Route
          path="/onceUseEffect"
          element={<OnceUseEffect></OnceUseEffect>}
        />
        <Route
          path="/useOutSideClick"
          element={<OutsideClickPage></OutsideClickPage>}
        />
        <Route
          path="/useDebounce"
          element={<DebouncedInput></DebouncedInput>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
