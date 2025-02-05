//rafce
import About from "@/pages/About";
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
      <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />        
      </Route>


      {/* Private */}
      <Route 
        path="admin"
        element = {
          <>
            <h1>Navbar</h1>
            <Outlet />
          </>
        }
        >
        <Route index element={<Dashboard />} />
        <Route path="manage" element={<Manage />} />
      </Route>

      {/* Not Found */}
      <Route path="*" element={<Notfound />} />

    </Routes>
  </BrowserRouter>
  )
}
export default AppRoutes