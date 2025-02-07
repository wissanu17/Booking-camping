//rafce
import LayoutAdmin from "@/layouts/LayoutAdmin";
import Layouts from "@/layouts/Layouts";
import About from "@/pages/About";
import Camping from "@/pages/admin/Camping";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Home from "@/pages/Home";
import Notfound from "@/pages/Notfound";
import { Layout } from "lucide-react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route element={<Layouts />} >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />        
        </Route>


        {/* Private */}
        <Route 
          path="admin"
          element = {<LayoutAdmin />} >
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
          <Route path="camping" element={<Camping />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<Notfound />} />

      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes