import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomeView from "./views/HomeView";
import TaskView from "./views/TaskView";
import MainLayout from "./Layouts/MainLayout";

import "./assets/css/App.css";
import "./assets/bootstrap-icons/bootstrap-icons.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<HomeView />} />
        <Route path="/task/:id" element={<TaskView />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
