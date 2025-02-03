import { Route, Routes, Navigate, Outlet, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Task from "./pages/Task";
import Users from "./pages/Users";
import Trash from "./pages/Trash";
import Taskdetails from "./pages/Taskdetails";
import Login from "./pages/Login";
import Toaster from "sonner";

function Layout() {
  const user = "";
  // Permet d'obtenir l'URL actuelle et ses informations dans une application React utilisant
  const location = useLocation();

  return user ? (
    <div></div>
  ) : (
    /*Redirige l'utilisateur vers login. Stocke l'URL actuelle (location) dans state, 
     afin qu’on puisse le récupérer après la connexion.*/

    <Navigate to="/login" state={{ from: location }}></Navigate>
  );
}

function App() {
  return (
    <main className="w-full m-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/tasks" element={<Task />}></Route>
          <Route path="/completed/:status" element={<Task />}></Route>
          <Route path="/in-progress/:status" element={<Task />}></Route>
          <Route path="/todo/:status" element={<Task />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/trashed" element={<Trash />}></Route>
          <Route path="/task/:id" element={<Taskdetails />}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </main>
  );
}

export default App;
