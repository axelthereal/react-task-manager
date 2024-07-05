import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomeView from "./views/HomeView";
import MainLayout from "./Layouts/MainLayout";
import TaskView from "./views/TaskView";
import AddTaskView from "./views/AddTaskView";
import EditTaskView from "./views/EditTaskView";

import "./assets/css/App.css";
import "./assets/bootstrap-icons/bootstrap-icons.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<HomeView />} />
        <Route path="/task/:id" element={<TaskView />} />
        <Route path="/add-task" element={<AddTaskView />} />
        <Route path="/edit-task/:id" element={<EditTaskView />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
