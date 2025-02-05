import { Route, Routes, Navigate, Outlet, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Task from "./pages/task";
import Users from "./pages/users";
import Trash from "./pages/trash";
import Taskdetails from "./pages/taskDetails";
import Login from "./pages/login";
import { Toaster } from "sonner";

function Layout() {
  const user = "";
  // Permet d'obtenir l'URL actuelle et ses informations dans une application React utilisant
  const location = useLocation();
  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        {/*<Sidebar/>*/}
      </div>

      {/*<MobileSidebar/>*/}
      <div className="flex-1 overflow-y-auto">
        {/*<NavSidebar/>*/}
        <div className="p-4 2xl:px-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  ) : (
    /*Redirige l'utilisateur vers login. Stocke l'URL actuelle (location) dans state, 
     afin qu’on puisse le récupérer après la connexion.*/
    /*
     Avec replace : L'utilisateur ne pourra pas revenir à la page précédente avec le bouton "retour" du navigateur après la redirection.
b    Sans replace : La page actuelle est conservée dans l'historique, donc l'utilisateur peut revenir en arrière.
     */
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
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
      <Toaster richColors></Toaster>
    </main>
  );
}

export default App;
