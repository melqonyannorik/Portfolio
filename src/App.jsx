import { Outlet } from "react-router";
import "./App.scss";

import Nav from "./components/Home/Nav/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />

      <Outlet />
    </div>
  );
};

export default App;
