import TaskItem from "./TaskItem";
import { Task } from "../../data/TasksTypes";
import { Link } from "react-router-dom";

interface TasksListProps {
  tasks: Task[];
}

const TasksList = ({ tasks }: TasksListProps) => {
  return (
    <>
      <div className="list-group gap-3 mt-3">
        {tasks.map((task) => (
          <Link to={`/task/${task.id}`}>
            <TaskItem task={task} key={task.id} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default TasksList;
