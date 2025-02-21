import { Button } from "./components/ui/button"
import { Toaster } from "./components/ui/toaster"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <div
      className="bg-blue-50 min-h-screen"
      // className="min-h-screen bg-cover bg-center"
      // style={{ backgroundImage: "url('/images/moo.jpg')" }}
    >
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;
