
import { Outlet } from "react-router-dom";
import "./App.css";

import SidebarListItem from "./components/SidebarListItem";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flexbox">
      <Sidebar/>
      <SidebarListItem/>
      
      <div className="layout-container">
     
        <Outlet />
   
      </div>
    </div>
  );
}
export default App;