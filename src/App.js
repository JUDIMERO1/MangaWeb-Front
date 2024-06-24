import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/user";
import routers from "./helper/Routers";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import Library from "./pages/Library";
import LogIn from "./pages/LogIn";
import LogUp from "./pages/LogUp";
import Profile from "./pages/Profile";
import Read from "./pages/Read";
import Serie from "./pages/Serie";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routers.home} element={<Home />} />
          <Route path={routers.library} element={<Library />} />
          <Route path={routers.groups} element={<Groups />} />
          <Route path={routers.login} element={<LogIn />} />
          <Route path={routers.logUp} element={<LogUp />} />
          <Route path={routers.profile} element={<Profile />} />
          <Route path={routers.serie} element={<Serie />} />
          <Route path={routers.read} element={<Read />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
